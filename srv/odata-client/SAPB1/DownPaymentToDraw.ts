/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DownPaymentToDrawDetails } from './DownPaymentToDrawDetails';
import { DownPaymentTypeEnum } from './DownPaymentTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * DownPaymentToDraw
 */
export interface DownPaymentToDraw<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Posting Date.
   * @nullable
   */
  postingDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Details.
   * @nullable
   */
  details?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Amount To Draw.
   * @nullable
   */
  amountToDraw?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Down Payment Type.
   * @nullable
   */
  downPaymentType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Amount To Draw Fc.
   * @nullable
   */
  amountToDrawFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Amount To Draw Sc.
   * @nullable
   */
  amountToDrawSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Doc Internal Id.
   * @nullable
   */
  docInternalId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Row Num.
   * @nullable
   */
  rowNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Doc Number.
   * @nullable
   */
  docNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Tax.
   * @nullable
   */
  tax?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Fc.
   * @nullable
   */
  taxFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Sc.
   * @nullable
   */
  taxSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Gross Amount To Draw.
   * @nullable
   */
  grossAmountToDraw?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Gross Amount To Draw Fc.
   * @nullable
   */
  grossAmountToDrawFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Gross Amount To Draw Sc.
   * @nullable
   */
  grossAmountToDrawSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Is Gross Line.
   * @nullable
   */
  isGrossLine?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Down Payments To Draw Details.
   * @nullable
   */
  downPaymentsToDrawDetails?: DeserializedType<
    DeSerializersT,
    'SAPB1.DownPaymentToDrawDetails'
  >;
}

/**
 * DownPaymentToDrawField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DownPaymentToDrawField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DownPaymentToDraw,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DownPaymentToDraw.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link DownPaymentToDraw.postingDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postingDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PostingDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link DownPaymentToDraw.dueDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DueDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link DownPaymentToDraw.name} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true);
  /**
   * Representation of the {@link DownPaymentToDraw.details} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Details', 'Edm.String', true);
  /**
   * Representation of the {@link DownPaymentToDraw.amountToDraw} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountToDraw: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AmountToDraw', 'Edm.Double', true);
  /**
   * Representation of the {@link DownPaymentToDraw.downPaymentType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  downPaymentType: EnumField<
    EntityT,
    DeSerializersT,
    DownPaymentTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DownPaymentType',
    DownPaymentTypeEnum,
    true
  );
  /**
   * Representation of the {@link DownPaymentToDraw.amountToDrawFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountToDrawFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AmountToDrawFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DownPaymentToDraw.amountToDrawSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountToDrawSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AmountToDrawSC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DownPaymentToDraw.docInternalId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docInternalId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocInternalID', 'Edm.Int32', true);
  /**
   * Representation of the {@link DownPaymentToDraw.rowNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RowNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link DownPaymentToDraw.docNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link DownPaymentToDraw.tax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Tax', 'Edm.Double', true);
  /**
   * Representation of the {@link DownPaymentToDraw.taxFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxFC', 'Edm.Double', true);
  /**
   * Representation of the {@link DownPaymentToDraw.taxSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxSC', 'Edm.Double', true);
  /**
   * Representation of the {@link DownPaymentToDraw.grossAmountToDraw} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmountToDraw: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GrossAmountToDraw',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DownPaymentToDraw.grossAmountToDrawFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmountToDrawFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GrossAmountToDrawFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DownPaymentToDraw.grossAmountToDrawSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmountToDrawSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GrossAmountToDrawSC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DownPaymentToDraw.isGrossLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isGrossLine: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsGrossLine', BoYesNoEnum, true);
  /**
   * Representation of the {@link DownPaymentToDraw.downPaymentsToDrawDetails} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  downPaymentsToDrawDetails: CollectionField<
    EntityT,
    DeSerializersT,
    DownPaymentToDrawDetails,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'DownPaymentsToDrawDetails',
    DownPaymentToDrawDetails,
    true
  );

  /**
   * Creates an instance of DownPaymentToDrawField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, DownPaymentToDraw, fieldOptions);
  }
}

export namespace DownPaymentToDraw {
  /**
   * Metadata information on all properties of the `DownPaymentToDraw` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DownPaymentToDraw>[] = [
    {
      originalName: 'DocEntry',
      name: 'docEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PostingDate',
      name: 'postingDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'DueDate',
      name: 'dueDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Name',
      name: 'name',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Details',
      name: 'details',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AmountToDraw',
      name: 'amountToDraw',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DownPaymentType',
      name: 'downPaymentType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AmountToDrawFC',
      name: 'amountToDrawFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AmountToDrawSC',
      name: 'amountToDrawSc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DocInternalID',
      name: 'docInternalId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'RowNum',
      name: 'rowNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DocNumber',
      name: 'docNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Tax',
      name: 'tax',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TaxFC',
      name: 'taxFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TaxSC',
      name: 'taxSc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'GrossAmountToDraw',
      name: 'grossAmountToDraw',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'GrossAmountToDrawFC',
      name: 'grossAmountToDrawFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'GrossAmountToDrawSC',
      name: 'grossAmountToDrawSc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'IsGrossLine',
      name: 'isGrossLine',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DownPaymentsToDrawDetails',
      name: 'downPaymentsToDrawDetails',
      type: DownPaymentToDrawDetails,
      isCollection: true
    }
  ];
}
