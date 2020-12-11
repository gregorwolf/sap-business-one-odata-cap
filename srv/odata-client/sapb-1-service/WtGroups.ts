/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocsInWtGroups } from './DocsInWtGroups';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * WtGroups
 */
export interface WtGroups {
  /**
   * Wt Abs Entry.
   * @nullable
   */
  wtAbsEntry?: number;
  /**
   * Percent.
   * @nullable
   */
  percent?: number;
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
   * Sum Percept Amount.
   * @nullable
   */
  sumPerceptAmount?: number;
  /**
   * Docs In Wt Groups Collection.
   * @nullable
   */
  docsInWtGroupsCollection?: DocsInWtGroups[];
}

/**
 * @deprecated Since v1.6.0. Use [[WtGroups.build]] instead.
 */
export function createWtGroups(json: any): WtGroups {
  return WtGroups.build(json);
}

/**
 * WtGroupsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WtGroupsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WtGroups> {
  /**
   * Representation of the [[WtGroups.wtAbsEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAbsEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WTAbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[WtGroups.percent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  percent: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Percent', this, 'Edm.Double');
  /**
   * Representation of the [[WtGroups.sumVatAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumVatAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumVATAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WtGroups.sumDocTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumDocTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumDocTotal', this, 'Edm.Double');
  /**
   * Representation of the [[WtGroups.sumBaseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumBaseAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumBaseAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WtGroups.sumAccumAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumAccumAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumAccumAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WtGroups.sumPerceptAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumPerceptAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumPerceptAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WtGroups.docsInWtGroupsCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docsInWtGroupsCollection: CollectionField<EntityT, DocsInWtGroups> = new CollectionField('DocsInWTGroupsCollection', this, DocsInWtGroups);

  /**
   * Creates an instance of WtGroupsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WtGroups);
  }
}

export namespace WtGroups {
  /**
   * Metadata information on all properties of the `WtGroups` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WtGroups>[] = [{
    originalName: 'WTAbsEntry',
    name: 'wtAbsEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Percent',
    name: 'percent',
    type: 'Edm.Double',
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
    originalName: 'SumPerceptAmount',
    name: 'sumPerceptAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DocsInWTGroupsCollection',
    name: 'docsInWtGroupsCollection',
    type: DocsInWtGroups,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | DocsInWtGroups }): WtGroups {
    return deserializeComplexTypeV4(json, WtGroups);
  }
}
