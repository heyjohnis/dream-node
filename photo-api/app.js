const path = require('path');
const os = require('os');
const fs = require('fs');

// 1. 폴더 입력 받기

console.log(process.argv);
const folder = process.argv[2];
const workingDir = path.join(os.homedir(), 'Pictures', folder);


console.log("workingDir: ",workingDir);
if(!folder || !fs.existsSync(workingDir)) {
  console.error('폴더를 입력하세요');
  return;
}

// 2. 폴더 만들기
const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicateDir = path.join(workingDir, 'duplicate');

!fs.existsSync(videoDir) && !fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && !fs.mkdirSync(capturedDir);
!fs.existsSync(duplicateDir) && !fs.mkdirSync(duplicateDir);
 

// 3. 폴더 안에 파일 
fs.promises.readdir(workingDir)
  .then(processFiles).catch(console.error);

function processFiles(files) {
  files.forEach((file) => {
    if(isVideoFile(file))
      move(file, videoDir)
    else if(isCapturedFile(file))
      move(file, capturedDir)
    else if(isDuplicatedFile(files, file))
      move(file, duplicateDir)
  });
}

function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match;
}
function isCapturedFile(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match;
}
function isDuplicatedFile(files, file) {
  if(!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
    return false;
  }

  const edited = `IMG_E${file.split('_')[1]}`;
  const found = files.find(f => f.includes(edited));
  return !!found;
}

function move(file, targetDir) {
  console.log(`move ${file} to ${path.basename(targetDir)}`)
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);
  fs.promises
    .rename(oldPath, newPath)
    .catch(console.error );
}