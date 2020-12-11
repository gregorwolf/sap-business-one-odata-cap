/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { DownPaymentToDrawDetails } from './DownPaymentToDrawDetails';
import { DownPaymentTypeEnum } from './DownPaymentTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DownPaymentToDraw
 */
export interface DownPaymentToDraw {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Posting Date.
   * @nullable
   */
  postingDate?: Moment;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: Moment;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Details.
   * @nullable
   */
  details?: string;
  /**
   * Amount To Draw.
   * @nullable
   */
  amountToDraw?: number;
  /**
   * Down Payment Type.
   * @nullable
   */
  downPaymentType?: DownPaymentTypeEnum;
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
   * Doc Number.
   * @nullable
   */
  docNumber?: number;
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
   * Is Gross Line.
   * @nullable
   */
  isGrossLine?: BoYesNoEnum;
  /**
   * Down Payments To Draw Details.
   * @nullable
   */
  downPaymentsToDrawDetails?: DownPaymentToDrawDetails[];
}

/**
 * @deprecated Since v1.6.0. Use [[DownPaymentToDraw.build]] instead.
 */
export function createDownPaymentToDraw(json: any): DownPaymentToDraw {
  return DownPaymentToDraw.build(json);
}

/**
 * DownPaymentToDrawField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DownPaymentToDrawField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DownPaymentToDraw> {
  /**
   * Representation of the [[DownPaymentToDraw.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DownPaymentToDraw.postingDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postingDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('PostingDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[DownPaymentToDraw.dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DueDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[DownPaymentToDraw.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[DownPaymentToDraw.details]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Details', this, 'Edm.String');
  /**
   * Representation of the [[DownPaymentToDraw.amountToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountToDraw: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AmountToDraw', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDraw.downPaymentType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  downPaymentType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DownPaymentType', this);
  /**
   * Representation of the [[DownPaymentToDraw.amountToDrawFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountToDrawFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AmountToDrawFC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDraw.amountToDrawSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountToDrawSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AmountToDrawSC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDraw.docInternalId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docInternalId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocInternalID', this, 'Edm.Int32');
  /**
   * Representation of the [[DownPaymentToDraw.rowNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNum', this, 'Edm.Int32');
  /**
   * Representation of the [[DownPaymentToDraw.docNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[DownPaymentToDraw.tax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tax: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Tax', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDraw.taxFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxFC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDraw.taxSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxSC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDraw.grossAmountToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmountToDraw: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossAmountToDraw', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDraw.grossAmountToDrawFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmountToDrawFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossAmountToDrawFC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDraw.grossAmountToDrawSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmountToDrawSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossAmountToDrawSC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDraw.isGrossLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isGrossLine: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IsGrossLine', this);
  /**
   * Representation of the [[DownPaymentToDraw.downPaymentsToDrawDetails]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  downPaymentsToDrawDetails: CollectionField<EntityT, DownPaymentToDrawDetails> = new CollectionField('DownPaymentsToDrawDetails', this, DownPaymentToDrawDetails);

  /**
   * Creates an instance of DownPaymentToDrawField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DownPaymentToDraw);
  }
}

export namespace DownPaymentToDraw {
  /**
   * Metadata information on all properties of the `DownPaymentToDraw` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DownPaymentToDraw>[] = [{
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PostingDate',
    name: 'postingDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'DueDate',
    name: 'dueDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Details',
    name: 'details',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AmountToDraw',
    name: 'amountToDraw',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DownPaymentType',
    name: 'downPaymentType',
    type: 'Edm.Enum',
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
    originalName: 'DocNumber',
    name: 'docNumber',
    type: 'Edm.Int32',
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
    originalName: 'IsGrossLine',
    name: 'isGrossLine',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DownPaymentsToDrawDetails',
    name: 'downPaymentsToDrawDetails',
    type: DownPaymentToDrawDetails,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | DownPaymentToDrawDetails }): DownPaymentToDraw {
    return deserializeComplexTypeV4(json, DownPaymentToDraw);
  }
}
