/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoSeriesGroupEnum } from './BoSeriesGroupEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoSeriesTypeEnum } from './BoSeriesTypeEnum';
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
 * Series
 */
export interface Series<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Document.
   * @nullable
   */
  document?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Document Sub Type.
   * @nullable
   */
  documentSubType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Initial Number.
   * @nullable
   */
  initialNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Last Number.
   * @nullable
   */
  lastNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Next Number.
   * @nullable
   */
  nextNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Prefix.
   * @nullable
   */
  prefix?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Suffix.
   * @nullable
   */
  suffix?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Group Code.
   * @nullable
   */
  groupCode?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Locked.
   * @nullable
   */
  locked?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Period Indicator.
   * @nullable
   */
  periodIndicator?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Series Property.
   * @nullable
   */
  seriesProperty?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Is Digital Series.
   * @nullable
   */
  isDigitalSeries?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Digit Number.
   * @nullable
   */
  digitNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Series Type.
   * @nullable
   */
  seriesType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Is Manual.
   * @nullable
   */
  isManual?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * At Document Type.
   * @nullable
   */
  atDocumentType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Is Electronic Comm Enabled.
   * @nullable
   */
  isElectronicCommEnabled?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Cost Account Only.
   * @nullable
   */
  costAccountOnly?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Invoice Type.
   * @nullable
   */
  invoiceType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Invoice Type Of Negative Invoice.
   * @nullable
   */
  invoiceTypeOfNegativeInvoice?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Portugal Series Action.
   * @nullable
   */
  portugalSeriesAction?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Portugal Series Status.
   * @nullable
   */
  portugalSeriesStatus?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Portugal Series Phase.
   * @nullable
   */
  portugalSeriesPhase?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * SeriesField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SeriesField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  Series,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link Series.document} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  document: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Document', 'Edm.String', true);
  /**
   * Representation of the {@link Series.documentSubType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentSubType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocumentSubType',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link Series.initialNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  initialNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('InitialNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link Series.lastNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LastNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link Series.nextNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nextNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NextNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link Series.prefix} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  prefix: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Prefix', 'Edm.String', true);
  /**
   * Representation of the {@link Series.suffix} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  suffix: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Suffix', 'Edm.String', true);
  /**
   * Representation of the {@link Series.remarks} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true);
  /**
   * Representation of the {@link Series.groupCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupCode: EnumField<
    EntityT,
    DeSerializersT,
    BoSeriesGroupEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('GroupCode', BoSeriesGroupEnum, true);
  /**
   * Representation of the {@link Series.locked} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  locked: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Locked', BoYesNoEnum, true);
  /**
   * Representation of the {@link Series.periodIndicator} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodIndicator: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PeriodIndicator',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link Series.name} property for query construction.
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
   * Representation of the {@link Series.seriesProperty} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  seriesProperty: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SeriesProperty', 'Edm.Int32', true);
  /**
   * Representation of the {@link Series.isDigitalSeries} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isDigitalSeries: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('IsDigitalSeries', BoYesNoEnum, true);
  /**
   * Representation of the {@link Series.digitNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  digitNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DigitNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link Series.seriesType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  seriesType: EnumField<
    EntityT,
    DeSerializersT,
    BoSeriesTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('SeriesType', BoSeriesTypeEnum, true);
  /**
   * Representation of the {@link Series.isManual} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isManual: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsManual', BoYesNoEnum, true);
  /**
   * Representation of the {@link Series.bplid} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplid: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPLID', 'Edm.Int32', true);
  /**
   * Representation of the {@link Series.atDocumentType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  atDocumentType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ATDocumentType',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link Series.isElectronicCommEnabled} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isElectronicCommEnabled: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'IsElectronicCommEnabled',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link Series.costAccountOnly} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costAccountOnly: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('CostAccountOnly', BoYesNoEnum, true);
  /**
   * Representation of the {@link Series.invoiceType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  invoiceType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('InvoiceType', 'Edm.Int32', true);
  /**
   * Representation of the {@link Series.invoiceTypeOfNegativeInvoice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  invoiceTypeOfNegativeInvoice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InvoiceTypeOfNegativeInvoice',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link Series.portugalSeriesAction} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portugalSeriesAction: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PortugalSeriesAction',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link Series.portugalSeriesStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portugalSeriesStatus: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PortugalSeriesStatus',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link Series.portugalSeriesPhase} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portugalSeriesPhase: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PortugalSeriesPhase',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of SeriesField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, Series, fieldOptions);
  }
}

export namespace Series {
  /**
   * Metadata information on all properties of the `Series` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Series>[] = [
    {
      originalName: 'Document',
      name: 'document',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DocumentSubType',
      name: 'documentSubType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'InitialNumber',
      name: 'initialNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LastNumber',
      name: 'lastNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'NextNumber',
      name: 'nextNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Prefix',
      name: 'prefix',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Suffix',
      name: 'suffix',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Remarks',
      name: 'remarks',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GroupCode',
      name: 'groupCode',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Locked',
      name: 'locked',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PeriodIndicator',
      name: 'periodIndicator',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Name',
      name: 'name',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SeriesProperty',
      name: 'seriesProperty',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'IsDigitalSeries',
      name: 'isDigitalSeries',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DigitNumber',
      name: 'digitNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'SeriesType',
      name: 'seriesType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'IsManual',
      name: 'isManual',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BPLID',
      name: 'bplid',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ATDocumentType',
      name: 'atDocumentType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'IsElectronicCommEnabled',
      name: 'isElectronicCommEnabled',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CostAccountOnly',
      name: 'costAccountOnly',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'InvoiceType',
      name: 'invoiceType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'InvoiceTypeOfNegativeInvoice',
      name: 'invoiceTypeOfNegativeInvoice',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PortugalSeriesAction',
      name: 'portugalSeriesAction',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PortugalSeriesStatus',
      name: 'portugalSeriesStatus',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PortugalSeriesPhase',
      name: 'portugalSeriesPhase',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
