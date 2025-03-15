import { useEffect, useRef, useState } from "react";
import s from "./DailyWaterList.module.css";
import sprite from "../../assets/sprite.svg";
import DailyWaterItem from "../DailyWaterItem/DailyWaterItem.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import EditWater from "../EditWater/EditWater.jsx";
import DeleteEntryModal from "../DeleteEntryModal/DeleteEntryModal.jsx";

const DailyWaterList = () => {
  const paginationRef = useRef(null);
  const swiperRef = useRef(null);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const testDailyArr = [
    {
      _id: "67a1f598a6ed72da1c331fd",
      volume: 250,
      date: "2025-03-05T10:00:00.000+00:00",
      userId: "67a1f598a6ed272da1c632df",
    },
    {
      _id: "67a1f98a6ed242da1c633fd",
      volume: 250,
      date: "2025-03-05T10:00:00.000+00:00",
      userId: "67a1f598a6ed272da1c632df",
    },
    {
      _id: "67a1f598a6ed172da1c633d",
      volume: 250,
      date: "2025-03-05T10:00:00.000+00:00",
      userId: "67a1f598a6ed272da1c632df",
    },
    {
      _id: "67a1f598a6ed972da1c633f",
      volume: 250,
      date: "2025-03-05T10:00:00.000+00:00",
      userId: "67a1f598a6ed272da1c632df",
    },
  ];
  // Додаємо обробник `wheel`, щоб Swiper працював із прокруткою миші
  useEffect(() => {
    const handleWheel = (event) => {
      if (swiperRef.current) {
        event.preventDefault();
        const swiper = swiperRef.current.swiper;
        swiper.slideTo(swiper.activeIndex + (event.deltaY > 0 ? 1 : -1));
      }
    };

    const swiperEl = swiperRef.current?.el;
    if (swiperEl) {
      swiperEl.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (swiperEl) {
        swiperEl.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <section>
      <div className={s.day_top_info}>
        <h2 className={s.current_day_title}>Today</h2>
        <button
          type="button"
          className={s.add_water_btn}
        >
          <span className={s.icon_plus_container}>
            <svg className={s.icon_plus}>
              <use href={sprite + "#icon-plus"} />
            </svg>
          </span>
          Add water
        </button>
      </div>

      {/* Якщо масив пустий, показуємо повідомлення */}
      {testDailyArr.length === 0 ? (
        <div className={s.empty_state}>
          <p className={s.empty_text}>
            No water records yet. Add your first entry!
          </p>
        </div>
      ) : (
        <div className={s.swiper_container}>
          <Swiper
            ref={swiperRef}
            freeMode={true}
            mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
            keyboard={{ enabled: true }}
            pagination={{
              el: paginationRef.current,
              type: "progressbar",
              clickable: true,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.pagination.el = paginationRef.current;
            }}
            modules={[Mousewheel, Keyboard, Pagination]}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 8 },
              768: { slidesPerView: 3, spaceBetween: 32 },
              1440: { slidesPerView: 3, spaceBetween: 16 },
            }}
            className={s.swiper}
          >
            {testDailyArr.map(({ _id, volume, date }) => (
              <SwiperSlide
                className={s.water_list}
                key={_id}
              >
                <DailyWaterItem
                  volume={volume}
                  date={date}
                  entryId={_id}
                  onEdit={() => setEditModalOpen(true)}
                  onDelete={setDeleteModalOpen}
                  setSelectedId={setSelectedId}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            ref={paginationRef}
            className={`${s.custom_pagination} swiper-pagination`}
          ></div>
        </div>
      )}
      {editModalOpen && (
        <EditWater onCloseModal={() => setEditModalOpen(false)} />
      )}
      {deleteModalOpen && (
        <DeleteEntryModal
          entryId={selectedId}
          onCloseModal={() => setDeleteModalOpen(false)}
        />
      )}
    </section>
  );
};

export default DailyWaterList;
