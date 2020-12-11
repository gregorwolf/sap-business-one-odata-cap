/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { WtGroups } from './WtGroups';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * WithholdingTaxCertificatesData
 */
export interface WithholdingTaxCertificatesData {
  /**
   * Poi Code Ref.
   * @nullable
   */
  poiCodeRef?: string;
  /**
   * Poi Code.
   * @nullable
   */
  poiCode?: string;
  /**
   * Certificate.
   * @nullable
   */
  certificate?: string;
  /**
   * W Tax Type.
   * @nullable
   */
  wTaxType?: string;
  /**
   * Period Indicator.
   * @nullable
   */
  periodIndicator?: string;
  /**
   * Wht Abs Id.
   * @nullable
   */
  whtAbsId?: number;
  /**
   * Series.
   * @nullable
   */
  series?: number;
  /**
   * Number.
   * @nullable
   */
  number?: number;
  /**
   * Issue Date.
   * @nullable
   */
  issueDate?: Moment;
  /**
   * Sum Vat Amount.
   * @nullable
   */
  sumVatAmount?: number;
  /**
   * Sum Doc Total.
   * @nullable
   */
  sumDocTotal?: number;
  /**
   * Sum Base Amount.
   * @nullable
   */
  sumBaseAmount?: number;
  /**
   * Sum Accum Amount.
   * @nullable
   */
  sumAccumAmount?: number;
  /**
   * Sum Perc Amount.
   * @nullable
   */
  sumPercAmount?: number;
  /**
   * Wt Groups Collection.
   * @nullable
   */
  wtGroupsCollection?: WtGroups[];
}

/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxCertificatesData.build]] instead.
 */
export function createWithholdingTaxCertificatesData(json: any): WithholdingTaxCertificatesData {
  return WithholdingTaxCertificatesData.build(json);
}

/**
 * WithholdingTaxCertificatesDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WithholdingTaxCertificatesDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WithholdingTaxCertificatesData> {
  /**
   * Representation of the [[WithholdingTaxCertificatesData.poiCodeRef]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  poiCodeRef: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('POICodeRef', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.poiCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  poiCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('POICode', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.certificate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  certificate: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Certificate', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.wTaxType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wTaxType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WTaxType', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.periodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodIndicator: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PeriodIndicator', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.whtAbsId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  whtAbsId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WhtAbsId', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.series]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  series: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Series', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.number]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  number: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Number', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.issueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  issueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('IssueDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.sumVatAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumVatAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumVATAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.sumDocTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumDocTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumDocTotal', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.sumBaseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumBaseAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumBaseAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.sumAccumAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumAccumAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumAccumAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.sumPercAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumPercAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumPercAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCertificatesData.wtGroupsCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtGroupsCollection: CollectionField<EntityT, WtGroups> = new CollectionField('WTGroupsCollection', this, WtGroups);

  /**
   * Creates an instance of WithholdingTaxCertificatesDataField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WithholdingTaxCertificatesData);
  }
}

export namespace WithholdingTaxCertificatesData {
  /**
   * Metadata information on all properties of the `WithholdingTaxCertificatesData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WithholdingTaxCertificatesData>[] = [{
    originalName: 'POICodeRef',
    name: 'poiCodeRef',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'POICode',
    name: 'poiCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Certificate',
    name: 'certificate',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'WTaxType',
    name: 'wTaxType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PeriodIndicator',
    name: 'periodIndicator',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'WhtAbsId',
    name: 'whtAbsId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Series',
    name: 'series',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Number',
    name: 'number',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'IssueDate',
    name: 'issueDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'SumVATAmount',
    name: 'sumVatAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SumDocTotal',
    name: 'sumDocTotal',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SumBaseAmount',
    name: 'sumBaseAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SumAccumAmount',
    name: 'sumAccumAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SumPercAmount',
    name: 'sumPercAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'WTGroupsCollection',
    name: 'wtGroupsCollection',
    type: WtGroups,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | WtGroups }): WithholdingTaxCertificatesData {
    return deserializeComplexTypeV4(json, WithholdingTaxCertificatesData);
  }
}
