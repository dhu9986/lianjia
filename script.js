document.addEventListener('DOMContentLoaded', () => {
    // 员工名单 (请替换为实际的员工姓名)
    const employees = ["成露花", "万志伟","于明飞","刘冬冬","袁昂","黄继","郑智","刘款款","江波","张委","赵明","沈伟伟","金涛","郑淮丰","何玉龙","何玲","胡玮炀","夏文明","李金","李路远","张盼楠","刘寿欢","魏冉","刘雪东","张春红","谢军","邹维永","奂丽","汤迎迎","黄庆妹","郭文静","吴秀平","林志良","王仲伟","顾存仓","马浩杰","庞夫强","董新军","韩霞","陈佳龙","刘佳欣","吴霜","张羽","康博","李玲玉","熬海江"];
    //const employees = ["登"，"ddd"，"ff"];
    //for (let i = 1; i <= 50; i++) {
        //employees.push(`员工 ${i}`);
        // 或者手动添加:
       // employees.push("李登涛");
       // employees.push("");
        // ... 直到加满50个
    //}

    const nameDisplay = document.getElementById('nameDisplay');
    const drawButton = document.getElementById('drawButton');

    let intervalId = null; // 用于存储 setInterval 的 ID
    let isDrawing = false; // 标记是否正在抽奖

    // 开始抽奖函数
    function startLottery() {
        if (isDrawing) return; // 如果正在抽奖，则不执行任何操作

        isDrawing = true;
        drawButton.disabled = true; // 禁用按钮
        nameDisplay.style.color = '#337ab7'; // 滚动时换个颜色

        // 开始滚动效果
        intervalId = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * employees.length);
            nameDisplay.textContent = employees[randomIndex];
        }, 100); // 每 100 毫秒切换一次名字，制造滚动效果

        // 设置延时停止滚动并显示结果
        setTimeout(() => {
            clearInterval(intervalId); // 清除滚动定时器

            // 随机选择最终获胜者
            const winnerIndex = Math.floor(Math.random() * employees.length);
            const winner = employees[winnerIndex];

            nameDisplay.textContent = winner; // 显示最终结果
            nameDisplay.style.color = '#d9534f'; // 恢复最终结果颜色
            alert(`恭喜 ${winner} 中奖！`); // 可以用弹窗提示

            isDrawing = false; // 抽奖结束
            drawButton.disabled = false; // 重新启用按钮

            // 可选：从列表中移除已中奖者，防止重复中奖（如果需要）
            // employees.splice(winnerIndex, 1);
            // if (employees.length === 0) {
            //     drawButton.textContent = "人员已抽完";
            //     drawButton.disabled = true;
            // }

        }, 3000); // 滚动持续 3 秒 (3000 毫秒)
    }

    // 给按钮绑定点击事件
    drawButton.addEventListener('click', startLottery);
});