/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WtGroups } from './WtGroups';
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
 * WithholdingTaxCertificatesData
 */
export interface WithholdingTaxCertificatesData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Poi Code Ref.
   * @nullable
   */
  poiCodeRef?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Poi Code.
   * @nullable
   */
  poiCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Certificate.
   * @nullable
   */
  certificate?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * W Tax Type.
   * @nullable
   */
  wTaxType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Period Indicator.
   * @nullable
   */
  periodIndicator?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Wht Abs Id.
   * @nullable
   */
  whtAbsId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Number.
   * @nullable
   */
  number?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Issue Date.
   * @nullable
   */
  issueDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Sum Vat Amount.
   * @nullable
   */
  sumVatAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Sum Doc Total.
   * @nullable
   */
  sumDocTotal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Sum Base Amount.
   * @nullable
   */
  sumBaseAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Sum Accum Amount.
   * @nullable
   */
  sumAccumAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Sum Perc Amount.
   * @nullable
   */
  sumPercAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Wt Groups Collection.
   * @nullable
   */
  wtGroupsCollection?: DeserializedType<DeSerializersT, 'SAPB1.WTGroups'>;
}

/**
 * WithholdingTaxCertificatesDataField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WithholdingTaxCertificatesDataField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WithholdingTaxCertificatesData,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WithholdingTaxCertificatesData.poiCodeRef} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  poiCodeRef: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('POICodeRef', 'Edm.String', true);
  /**
   * Representation of the {@link WithholdingTaxCertificatesData.poiCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  poiCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('POICode', 'Edm.String', true);
  /**
   * Representation of the {@link WithholdingTaxCertificatesData.certificate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  certificate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Certificate', 'Edm.String', true);
  /**
   * Representation of the {@link WithholdingTaxCertificatesData.wTaxType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wTaxType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WTaxType', 'Edm.String', true);
  /**
   * Representation of the {@link WithholdingTaxCertificatesData.periodIndicator} property for query construction.
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
   * Representation of the {@link WithholdingTaxCertificatesData.whtAbsId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  whtAbsId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WhtAbsId', 'Edm.Int32', true);
  /**
   * Representation of the {@link WithholdingTaxCertificatesData.series} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  series: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true);
  /**
   * Representation of the {@link WithholdingTaxCertificatesData.number} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  number: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Number', 'Edm.Int32', true);
  /**
   * Representation of the {@link WithholdingTaxCertificatesData.issueDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  issueDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'IssueDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxCertificatesData.sumVatAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumVatAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SumVATAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxCertificatesData.sumDocTotal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumDocTotal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SumDocTotal', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxCertificatesData.sumBaseAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumBaseAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SumBaseAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxCertificatesData.sumAccumAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumAccumAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SumAccumAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link WithholdingTaxCertificatesData.sumPercAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumPercAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SumPercAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link WithholdingTaxCertificatesData.wtGroupsCollection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtGroupsCollection: CollectionField<
    EntityT,
    DeSerializersT,
    WtGroups,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'WTGroupsCollection',
    WtGroups,
    true
  );

  /**
   * Creates an instance of WithholdingTaxCertificatesDataField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      WithholdingTaxCertificatesData,
      fieldOptions
    );
  }
}

export namespace WithholdingTaxCertificatesData {
  /**
   * Metadata information on all properties of the `WithholdingTaxCertificatesData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WithholdingTaxCertificatesData>[] =
    [
      {
        originalName: 'POICodeRef',
        name: 'poiCodeRef',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'POICode',
        name: 'poiCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Certificate',
        name: 'certificate',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'WTaxType',
        name: 'wTaxType',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'PeriodIndicator',
        name: 'periodIndicator',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'WhtAbsId',
        name: 'whtAbsId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Series',
        name: 'series',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Number',
        name: 'number',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'IssueDate',
        name: 'issueDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'SumVATAmount',
        name: 'sumVatAmount',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'SumDocTotal',
        name: 'sumDocTotal',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'SumBaseAmount',
        name: 'sumBaseAmount',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'SumAccumAmount',
        name: 'sumAccumAmount',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'SumPercAmount',
        name: 'sumPercAmount',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'WTGroupsCollection',
        name: 'wtGroupsCollection',
        type: WtGroups,
        isCollection: true
      }
    ];
}
