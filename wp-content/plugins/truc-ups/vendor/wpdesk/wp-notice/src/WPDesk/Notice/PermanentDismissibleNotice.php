<?php

namespace WPDesk\Notice;

/**
 * Class PermanentDismissibleNotice
 *
 * WordPress admin dismissible notice.
 * @package WPDesk\Notice
 */
class PermanentDismissibleNotice extends Notice
{

    const OPTION_NAME_PREFIX = 'wpdesk_notice_dismiss_';
    const OPTION_VALUE_DISMISSED = '1';

    /**
     * @var string
     */
    private $noticeName;

    /**
     * @var string
     */
    private $noticeDismissOptionName;

    /**
     * WPDesk_Flexible_Shipping_Notice constructor.
     *
     * @param string $noticeContent Notice content.
     * @param string $noticeType Notice type.
     * @param string $noticeName Notice dismiss option name.
     * @param int    $priority Priority
     */

    public function __construct($noticeContent, $noticeType, $noticeName, $priority = 10)
    {
        parent::__construct($noticeContent, $noticeType, true, $priority);
        $this->noticeName = $noticeName;
        $this->noticeDismissOptionName = static::OPTION_NAME_PREFIX . $noticeName;
        if (self::OPTION_VALUE_DISMISSED === get_option($this->noticeDismissOptionName, '')) {
            $this->removeAction();
        }
    }

    /**
     * Undo dismiss notice.
     */
    public function undoDismiss()
    {
        delete_option($this->noticeDismissOptionName);
        $this->addAction();
    }

    /**
     * Get attributes as string.
     *
     * @return string
     */
    protected function getAttributesAsString()
    {
        $attributesAsString = parent::getAttributesAsString();
        $attributesAsString .= sprintf('data-notice-name="%1$s"', esc_attr($this->noticeName));
        return $attributesAsString;
    }

}

