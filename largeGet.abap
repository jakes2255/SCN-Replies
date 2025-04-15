METHOD productset_get_entityset.

  DATA: lt_products    TYPE TABLE OF zproduct,   "Your DB table
        lt_filtered    TYPE TABLE OF zproduct,
        ls_product     TYPE zproduct,
        ls_entity      TYPE zcl_zodata_product_dpc=>ts_product,
        lv_skip        TYPE i,
        lv_top         TYPE i.

  " Get paging parameters
  lv_skip = io_tech_request_context->get_paging_skip( ).
  lv_top  = io_tech_request_context->get_paging_top( ).

  " Default value if $top is not passed
  IF lv_top IS INITIAL.
    lv_top = 50.
  ENDIF.

  " Fetch data from DB
  SELECT * FROM zproduct
    INTO TABLE lt_products
    UP TO lv_skip + lv_top ROWS.

  " Paging logic: Skip + Top
  IF lv_skip > 0.
    lt_filtered = lt_products[ lv_skip + 1 : ].
  ELSE.
    lt_filtered = lt_products.
  ENDIF.

  LOOP AT lt_filtered INTO ls_product FROM 1 TO lv_top.
    CLEAR ls_entity.

    " Map DB fields to entity fields
    ls_entity-productid = ls_product-productid.
    ls_entity-name      = ls_product-name.
    ls_entity-price     = ls_product-price.
    " Add more fields as needed

    APPEND ls_entity TO et_entityset.
  ENDLOOP.

ENDMETHOD.
