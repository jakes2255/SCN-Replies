CLASS zcl_my_handler IMPLEMENTATION.

  METHOD read_entity.
    DATA: lt_data TYPE TABLE OF zmy_entity.

    TRY.
        SELECT * FROM zmy_entity
          INTO TABLE lt_data
          WHERE key_field = @keys-key_field.  " Use your key field

        IF lt_data IS INITIAL.
          RAISE EXCEPTION TYPE /iwbep/cx_mgw_busi_exception
            EXPORTING textid = /iwbep/cx_mgw_busi_exception=>business_error
                      message = 'Record not found!'.
        ENDIF.

        result = lt_data.  " Return the result

      CATCH cx_sy_open_sql_db INTO DATA(lx_sql).
        RAISE EXCEPTION TYPE /iwbep/cx_mgw_tech_exception
          EXPORTING message = lx_sql->get_text( ).

    ENDTRY.

  ENDMETHOD.

ENDCLASS.
