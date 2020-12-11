/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { LineTypeEnum } from './LineTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DownPaymentToDrawDetails
 */
export interface DownPaymentToDrawDetails {
  /**
   * Doc Internal Id.
   * @nullable
   */
  docInternalId?: number;
  /**
   * Row Num.
   * @nullable
   */
  rowNum?: number;
  /**
   * Seq Num.
   * @nullable
   */
  seqNum?: number;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Vat Group Code.
   * @nullable
   */
  vatGroupCode?: string;
  /**
   * Vat Percent.
   * @nullable
   */
  vatPercent?: number;
  /**
   * Amount To Draw.
   * @nullable
   */
  amountToDraw?: number;
  /**
   * Amount To Draw Fc.
   * @nullable
   */
  amountToDrawFc?: number;
  /**
   * Amount To Draw Sc.
   * @nullable
   */
  amountToDrawSc?: number;
  /**
   * Tax.
   * @nullable
   */
  tax?: number;
  /**
   * Tax Fc.
   * @nullable
   */
  taxFc?: number;
  /**
   * Tax Sc.
   * @nullable
   */
  taxSc?: number;
  /**
   * Is Gross Line.
   * @nullable
   */
  isGrossLine?: BoYesNoEnum;
  /**
   * Gross Amount To Draw.
   * @nullable
   */
  grossAmountToDraw?: number;
  /**
   * Gross Amount To Draw Fc.
   * @nullable
   */
  grossAmountToDrawFc?: number;
  /**
   * Gross Amount To Draw Sc.
   * @nullable
   */
  grossAmountToDrawSc?: number;
  /**
   * Line Type.
   * @nullable
   */
  lineType?: LineTypeEnum;
  /**
   * Tax Adjust.
   * @nullable
   */
  taxAdjust?: BoYesNoEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[DownPaymentToDrawDetails.build]] instead.
 */
export function createDownPaymentToDrawDetails(json: any): DownPaymentToDrawDetails {
  return DownPaymentToDrawDetails.build(json);
}

/**
 * DownPaymentToDrawDetailsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DownPaymentToDrawDetailsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DownPaymentToDrawDetails> {
  /**
   * Representation of the [[DownPaymentToDrawDetails.docInternalId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docInternalId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocInternalID', this, 'Edm.Int32');
  /**
   * Representation of the [[DownPaymentToDrawDetails.rowNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNum', this, 'Edm.Int32');
  /**
   * Representation of the [[DownPaymentToDrawDetails.seqNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  seqNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SeqNum', this, 'Edm.Int32');
  /**
   * Representation of the [[DownPaymentToDrawDetails.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DownPaymentToDrawDetails.vatGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatGroupCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VatGroupCode', this, 'Edm.String');
  /**
   * Representation of the [[DownPaymentToDrawDetails.vatPercent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatPercent: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VatPercent', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDrawDetails.amountToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountToDraw: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AmountToDraw', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDrawDetails.amountToDrawFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountToDrawFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AmountToDrawFC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDrawDetails.amountToDrawSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountToDrawSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AmountToDrawSC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDrawDetails.tax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tax: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Tax', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDrawDetails.taxFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxFC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDrawDetails.taxSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxSC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDrawDetails.isGrossLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isGrossLine: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IsGrossLine', this);
  /**
   * Representation of the [[DownPaymentToDrawDetails.grossAmountToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmountToDraw: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossAmountToDraw', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDrawDetails.grossAmountToDrawFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmountToDrawFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossAmountToDrawFC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDrawDetails.grossAmountToDrawSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmountToDrawSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossAmountToDrawSC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDrawDetails.lineType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('LineType', this);
  /**
   * Representation of the [[DownPaymentToDrawDetails.taxAdjust]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxAdjust: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('TaxAdjust', this);

  /**
   * Creates an instance of DownPaymentToDrawDetailsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DownPaymentToDrawDetails);
  }
}

export namespace DownPaymentToDrawDetails {
  /**
   * Metadata information on all properties of the `DownPaymentToDrawDetails` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DownPaymentToDrawDetails>[] = [{
    originalName: 'DocInternalID',
    name: 'docInternalId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'RowNum',
    name: 'rowNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SeqNum',
    name: 'seqNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'VatGroupCode',
    name: 'vatGroupCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'VatPercent',
    name: 'vatPercent',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AmountToDraw',
    name: 'amountToDraw',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AmountToDrawFC',
    name: 'amountToDrawFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AmountToDrawSC',
    name: 'amountToDrawSc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Tax',
    name: 'tax',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxFC',
    name: 'taxFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TaxSC',
    name: 'taxSc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'IsGrossLine',
    name: 'isGrossLine',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'GrossAmountToDraw',
    name: 'grossAmountToDraw',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'GrossAmountToDrawFC',
    name: 'grossAmountToDrawFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'GrossAmountToDrawSC',
    name: 'grossAmountToDrawSc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LineType',
    name: 'lineType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'TaxAdjust',
    name: 'taxAdjust',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DownPaymentToDrawDetails {
    return deserializeComplexTypeV4(json, DownPaymentToDrawDetails);
  }
}
