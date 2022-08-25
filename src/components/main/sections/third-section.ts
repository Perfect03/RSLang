export const createThirdSection = () => {
    const main = document.querySelector('main') as HTMLElement;
    const main_section_three = document.createElement('section');
    main_section_three.classList.add('main_section_three');
    main.append(main_section_three);

    const main_section_three_h1 = document.createElement('h1');
    main_section_three_h1.classList.add('main_section_h1');
    main_section_three_h1.textContent = 'All posibilities';
    main_section_three.append(main_section_three_h1);

    const main_section_three_box_video = document.createElement('div');
    main_section_three_box_video.classList.add('main_section_three_box_video');
    main_section_three.append(main_section_three_box_video);

    const main_section_three_video = document.createElement('video');
    main_section_three_video.classList.add('main_section_three_video');
    //main_section_three_video.src = "youtu.be/nTctuRId4-4"
    main_section_three_box_video.append(main_section_three_video);

    const main_section_three_video_link = document.createElement('p');
    main_section_three_video_link.classList.add('main_section_three_video_link');
    main_section_three_video.append(main_section_three_video_link);
    main_section_three_video_link.textContent =
        'This video is not for your browser. Please use this link https://youtu.be/nTctuRId4-4';
};
