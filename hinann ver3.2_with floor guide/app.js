// チェックポイントに移動する関数
function goToNextCheckpoint(nextCheckpoint) {
    const currentCheckpoint = document.querySelector('.checkpoint:not([style*="display: none"])');
    currentCheckpoint.style.display = 'none';

    const nextCheckpointElement = document.getElementById(`checkpoint-${nextCheckpoint}`);
    if (nextCheckpointElement) {
        nextCheckpointElement.style.display = 'block';
        moveCameraToCheckpoint(nextCheckpoint); // 現在のフロアを更新
        window.scrollTo({ top: 0, behavior: 'smooth' }); // ページを一番上にスクロール
    } else {
        goToDestination(); // 目的地到着時の処理
        window.scrollTo({ top: 0, behavior: 'smooth' }); // ページを一番上にスクロール
    }
}

// 目的地到着時の処理
function goToDestination() {
    alert('目的地に到着しました！');
    document.getElementById('destination-message').style.display = 'block';

    // チェックポイントを非表示
    const checkpoints = document.querySelectorAll('.checkpoint');
    checkpoints.forEach(checkpoint => checkpoint.style.display = 'none');
}

// 現在のフロアを更新する関数
function moveCameraToCheckpoint(checkpoint) {
    let floorText = '';

    switch (checkpoint) {
        case 1:
            floorText = '3階';
            break;
        case 2:
        case 3:
            floorText = '2階';
            break;
        case 4:
            floorText = '1階';
            break;
        default:
            floorText = '1階';
            break;
    }

    // 現在のフロアを右上に表示
    document.getElementById('current-floor').textContent = floorText;
}