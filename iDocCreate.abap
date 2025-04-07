FUNCTION Z_TRIGGER_IDOC.
*"----------------------------------------------------------------------
*"  Importing  VALUE(I_MATNR) TYPE  MATNR
*"----------------------------------------------------------------------

DATA: ls_edidc TYPE edidc,
      lt_edidd TYPE TABLE OF edidd,
      lv_idoc_number TYPE edi_docnum.

CALL FUNCTION 'MASTER_IDOC_DISTRIBUTE'
  EXPORTING
    master_idoc_control = ls_edidc
  TABLES
    communication_idoc_control = lt_edidd
  EXCEPTIONS
    OTHERS = 1.

ENDFUNCTION.
