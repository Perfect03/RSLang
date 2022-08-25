import './stat.css';
import './assets/audio.png';
import './assets/sprint.png';

export const createStatistics = () => {
    const deleteChildsOfMain = () => {
        const main = document.querySelector('main') as HTMLElement;
        while (main.hasChildNodes()) {
            main.removeChild(main.firstChild as HTMLElement);
        }
    };
    deleteChildsOfMain();

    const main = document.querySelector('main') as HTMLElement;
    const main_stat = document.createElement('div');
    main_stat.classList.add('main_stat');
    main.append(main_stat);

    const main_stat_section = document.createElement('div');
    main_stat_section.classList.add('main_stat_section');
    main_stat.append(main_stat_section);

    const main_stat_section_day = document.createElement('div');
    main_stat_section_day.classList.add('main_stat_section_day');
    main_stat_section.append(main_stat_section_day);

    const main_stat_section_day_h1 = document.createElement('h1');
    main_stat_section_day_h1.classList.add('main_stat_section_day_h1');
    main_stat_section_day.append(main_stat_section_day_h1);
    main_stat_section_day_h1.textContent = 'Today';

    const main_stat_section_boxes = document.createElement('div');
    main_stat_section_boxes.classList.add('main_stat_section_boxes');
    main_stat_section.append(main_stat_section_boxes);

    const main_stat_words = document.createElement('div');
    main_stat_words.classList.add('main_stat_words', 'boxes_stat');
    main_stat_section_boxes.append(main_stat_words);

    const main_stat_words_h2 = document.createElement('h2');
    main_stat_words_h2.classList.add('main_stat_h2');
    main_stat_words.append(main_stat_words_h2);
    main_stat_words_h2.textContent = 'You learned';

    const main_stat_words_box = document.createElement('div');
    main_stat_words_box.classList.add('main_stat_words_box');
    main_stat_words.append(main_stat_words_box);

    const main_stat_words_box_h3 = document.createElement('h3');
    main_stat_words_box_h3.classList.add('main_stat_words_box_h3');
    main_stat_words_box.append(main_stat_words_box_h3);
    main_stat_words_box_h3.textContent = '0';

    const main_stat_words_box_p = document.createElement('p');
    main_stat_words_box_p.classList.add('main_stat_words_box_p');
    main_stat_words_box.append(main_stat_words_box_p);
    main_stat_words_box_p.textContent = 'words';

    const main_stat_accuracy = document.createElement('div');
    main_stat_accuracy.classList.add('main_stat_accuracy', 'boxes_stat');
    main_stat_section_boxes.append(main_stat_accuracy);

    const main_stat_accuracy_h2 = document.createElement('h2');
    main_stat_accuracy_h2.classList.add('main_stat_h2');
    main_stat_accuracy.append(main_stat_accuracy_h2);
    main_stat_accuracy_h2.textContent = 'Accuracy';

    const accuracy_progress_circle = document.createElement('div');
    accuracy_progress_circle.classList.add('accuracy_progress_circle');
    main_stat_accuracy.append(accuracy_progress_circle);
    accuracy_progress_circle.dataset.percent = '0';

    const accuracy_circle_progress = document.createElement('div');
    accuracy_circle_progress.classList.add('accuracy_circle_progress');
    accuracy_progress_circle.append(accuracy_circle_progress);

    const accuracy_circle_progress_fill = document.createElement('div');
    accuracy_circle_progress_fill.classList.add('accuracy_circle_progress_fill');
    accuracy_circle_progress.append(accuracy_circle_progress_fill);

    const accuracy_circle_progress_percents = document.createElement('div');
    accuracy_circle_progress_percents.classList.add('accuracy_circle_progress_percents');
    accuracy_progress_circle.append(accuracy_circle_progress_percents);

    const accuracy_circle_progress_percents_wrapper = document.createElement('div');
    accuracy_circle_progress_percents_wrapper.classList.add('accuracy_circle_progress_percents_wrapper');
    accuracy_circle_progress_percents.append(accuracy_circle_progress_percents_wrapper);

    const accuracy_circle_progress_percents_span = document.createElement('span');
    accuracy_circle_progress_percents_span.classList.add('accuracy_circle_progress_percents_span');
    accuracy_circle_progress_percents_wrapper.append(accuracy_circle_progress_percents_span);
    accuracy_circle_progress_percents_span.textContent = '%';

    const main_stat_sprint = document.createElement('div');
    main_stat_sprint.classList.add('main_stat_sprint', 'boxes_stat');
    main_stat_section_boxes.append(main_stat_sprint);

    const main_stat_sprint_name_box = document.createElement('div');
    main_stat_sprint_name_box.classList.add('main_stat_name_box');
    main_stat_sprint.append(main_stat_sprint_name_box);

    const main_stat_sprint_name = document.createElement('h2');
    main_stat_sprint_name.classList.add('main_stat_h2');
    main_stat_sprint_name_box.append(main_stat_sprint_name);
    main_stat_sprint_name.textContent = 'Sprint';

    const main_stat_sprint_name_img = document.createElement('img');
    main_stat_sprint_name_img.classList.add('main_stat_name_img');
    main_stat_sprint_name_box.append(main_stat_sprint_name_img);
    main_stat_sprint_name_img.src = 'components/statistics/assets/sprint.png';

    const main_stat_sprint_stat = document.createElement('div');
    main_stat_sprint_stat.classList.add('main_stat_stat');
    main_stat_sprint.append(main_stat_sprint_stat);

    const main_stat_sprint_stat_words = document.createElement('div');
    main_stat_sprint_stat_words.classList.add('main_stat_sprint_stat_words', 'stat_row');
    main_stat_sprint_stat.append(main_stat_sprint_stat_words);

    const main_sprint_stat_words_num = document.createElement('span');
    main_sprint_stat_words_num.classList.add('main_sprint_stat_words_num');
    main_stat_sprint_stat_words.append(main_sprint_stat_words_num);
    main_sprint_stat_words_num.textContent = '0';

    const main_sprint_stat_words_words = document.createElement('span');
    main_sprint_stat_words_words.classList.add('main_sprint_stat_words_words', 'stat_points');
    main_stat_sprint_stat_words.append(main_sprint_stat_words_words);
    main_sprint_stat_words_words.textContent = 'words';

    const main_stat_sprint_stat_accuracy = document.createElement('div');
    main_stat_sprint_stat_accuracy.classList.add('main_stat_sprint_stat_accuracy', 'stat_row');
    main_stat_sprint_stat.append(main_stat_sprint_stat_accuracy);

    const main_sprint_stat_accuracy_num = document.createElement('span');
    main_sprint_stat_accuracy_num.classList.add('main_sprint_stat_accuracy_num');
    main_stat_sprint_stat_accuracy.append(main_sprint_stat_accuracy_num);
    main_sprint_stat_accuracy_num.textContent = '0 %';

    const main_sprint_stat_accuracy_accuracy = document.createElement('span');
    main_sprint_stat_accuracy_accuracy.classList.add('main_sprint_stat_accuracy_accuracy', 'stat_points');
    main_stat_sprint_stat_accuracy.append(main_sprint_stat_accuracy_accuracy);
    main_sprint_stat_accuracy_accuracy.textContent = 'accuracy';

    const main_stat_sprint_stat_row = document.createElement('div');
    main_stat_sprint_stat_row.classList.add('main_stat_sprint_stat_row', 'stat_row');
    main_stat_sprint_stat.append(main_stat_sprint_stat_row);

    const main_sprint_stat_row_num = document.createElement('span');
    main_sprint_stat_row_num.classList.add('main_sprint_stat_row_num');
    main_stat_sprint_stat_row.append(main_sprint_stat_row_num);
    main_sprint_stat_row_num.textContent = '0';

    const main_sprint_stat_row_row = document.createElement('span');
    main_sprint_stat_row_row.classList.add('main_sprint_stat_row_row', 'stat_points');
    main_stat_sprint_stat_row.append(main_sprint_stat_row_row);
    main_sprint_stat_row_row.textContent = 'in a row';

    const main_stat_audio = document.createElement('div');
    main_stat_audio.classList.add('main_stat_audio', 'boxes_stat');
    main_stat_section_boxes.append(main_stat_audio);

    const main_stat_audio_name_box = document.createElement('div');
    main_stat_audio_name_box.classList.add('main_stat_name_box');
    main_stat_audio.append(main_stat_audio_name_box);

    const main_stat_audio_name = document.createElement('h2');
    main_stat_audio_name.classList.add('main_stat_h2');
    main_stat_audio_name_box.append(main_stat_audio_name);
    main_stat_audio_name.textContent = 'Audio challenge';

    const main_stat_audio_name_img = document.createElement('img');
    main_stat_audio_name_img.classList.add('main_stat_name_img');
    main_stat_audio_name_box.append(main_stat_audio_name_img);
    main_stat_audio_name_img.src = 'components/statistics/assets/audio.png';

    const main_stat_audio_stat = document.createElement('div');
    main_stat_audio_stat.classList.add('main_stat_stat');
    main_stat_audio.append(main_stat_audio_stat);

    const main_stat_audio_stat_words = document.createElement('div');
    main_stat_audio_stat_words.classList.add('main_stat_audio_stat_words', 'stat_row');
    main_stat_audio_stat.append(main_stat_audio_stat_words);

    const main_audio_stat_words_num = document.createElement('span');
    main_audio_stat_words_num.classList.add('main_audio_stat_words_num');
    main_stat_audio_stat_words.append(main_audio_stat_words_num);
    main_audio_stat_words_num.textContent = '0';

    const main_audio_stat_words_words = document.createElement('span');
    main_audio_stat_words_words.classList.add('main_audio_stat_words_words', 'stat_points');
    main_stat_audio_stat_words.append(main_audio_stat_words_words);
    main_audio_stat_words_words.textContent = 'words';

    const main_stat_audio_stat_accuracy = document.createElement('div');
    main_stat_audio_stat_accuracy.classList.add('main_stat_audio_stat_accuracy', 'stat_row');
    main_stat_audio_stat.append(main_stat_audio_stat_accuracy);

    const main_audio_stat_accuracy_num = document.createElement('span');
    main_audio_stat_accuracy_num.classList.add('main_audio_stat_accuracy_num');
    main_stat_audio_stat_accuracy.append(main_audio_stat_accuracy_num);
    main_audio_stat_accuracy_num.textContent = '0 %';

    const main_audio_stat_accuracy_accuracy = document.createElement('span');
    main_audio_stat_accuracy_accuracy.classList.add('main_audio_stat_accuracy_accuracy', 'stat_points');
    main_stat_audio_stat_accuracy.append(main_audio_stat_accuracy_accuracy);
    main_audio_stat_accuracy_accuracy.textContent = 'accuracy';

    const main_stat_audio_stat_row = document.createElement('div');
    main_stat_audio_stat_row.classList.add('main_stat_audio_stat_row', 'stat_row');
    main_stat_audio_stat.append(main_stat_audio_stat_row);

    const main_audio_stat_row_num = document.createElement('span');
    main_audio_stat_row_num.classList.add('main_audio_stat_row_num');
    main_stat_audio_stat_row.append(main_audio_stat_row_num);
    main_audio_stat_row_num.textContent = '0';

    const main_audio_stat_row_row = document.createElement('span');
    main_audio_stat_row_row.classList.add('main_audio_stat_row_row', 'stat_points');
    main_stat_audio_stat_row.append(main_audio_stat_row_row);
    main_audio_stat_row_row.textContent = 'in a row';

    function createCircle() {
        const progress_circle = document.querySelector('.accuracy_progress_circle') as HTMLElement;
        const percent = parseInt(progress_circle.dataset.percent!);
        const deg = (360 * percent) / 100;
        console.log(percent);

        if (percent > 50) {
            progress_circle?.classList.add('gt_50');
        }
        (document.querySelector('.accuracy_circle_progress_fill') as HTMLElement).style.transform =
            'rotate(' + deg + 'deg)';
        (document.querySelector('.accuracy_circle_progress_percents_span') as HTMLElement).innerText = percent + '%';
    }

    createCircle();
};
