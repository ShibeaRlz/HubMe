"use client";
import InviteCheck from "@/../public/invite-check";
import LikeSearch from "@/../public/like-search";
// import { Skeleton } from "@/components/ui/skeleton";
import { EventCard } from "@/features/event";
import { getEvents } from "@/features/event/hooks/get-events";
import { EventType } from "@/features/event/types/event";
import { Popup } from "@/features/popup";
// import TagButton from "@/features/tags/components/Tag";
import { getTags } from "@/features/tags/hooks/get-tags";
import { TagType } from "@/features/tags/types/tag";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

const EventPage = () => {
  const [_tags, setTags] = useState<TagType[]>([]);
  const [events, setEvents] = useState<EventType[]>([]);
  const [invitedEvents, setInvitedEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;
    const fetchTags = async () => {
      try {
        const response = await getTags();
        if (mounted) {
          setTags(response);
        }
      } catch (error) {
        console.error("Failed to fetch tags:", error);
      }
    };

    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getEvents();
        if (mounted) {
          setEvents(fetchedEvents);
          setInvitedEvents(fetchedEvents);
          //本来は以下のようにして招待されたイベントのみを取得する
          //setInvitedEvents(fetchedEvents.filter((home) => home.invited));
          if (invitedEvents.length > 0) {
            setShowPopup(true);
          }
        }
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };
    fetchTags();
    fetchEvents();
    return () => {
      mounted = false;
    };
  }, [invitedEvents]);

  const handleEventClose = () => {};

  return (
    <>
      {/*<AuthProvider>*/}
      {!loading && events.length > 0 && showPopup && <Popup cards={events} />}
      <div className={styles.inviteCheck}>
        <InviteCheck size={500} />
      </div>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <LikeSearch size={100} />
        </div>

        {/* <div className={styles.tagWrapper}>
          {tag_name?.length > 0 ? (
            <div className={styles.tagsContainer}>
              {tag_name.map(tag => (
                <TagButton key={tag.name} variant="red">
                  {tag.name}
                </TagButton>
              ))}
            </div>
          ) : (
            <Skeleton className="w-full h-[40px] rounded-lg" />
          )}
        </div> */}
      </div>

      <div className={styles.cardWrapper}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          events.map((event, index) => (
            <EventCard
              key={`${event.community_uuid}-${index}`}
              title={event.title}
              publisher={event.community_info.name}
              publisherIcon={event.community_info.img}
              datetime={event.date}
              imageUrl={event.img}
              liked={false}
              handleEventClose={handleEventClose}
            />
          ))
        )}
      </div>
      {/*</AuthProvider>*/}
    </>
  );
};

export default EventPage;
