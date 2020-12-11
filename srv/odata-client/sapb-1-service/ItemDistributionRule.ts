/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ItemDistributionRule
 */
export interface ItemDistributionRule {
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Valid From.
   * @nullable
   */
  validFrom?: Moment;
  /**
   * Valid To.
   * @nullable
   */
  validTo?: Moment;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: string;
  /**
   * Distribution Rule 2.
   * @nullable
   */
  distributionRule2?: string;
  /**
   * Distribution Rule 3.
   * @nullable
   */
  distributionRule3?: string;
  /**
   * Distribution Rule 4.
   * @nullable
   */
  distributionRule4?: string;
  /**
   * Distribution Rule 5.
   * @nullable
   */
  distributionRule5?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemDistributionRule.build]] instead.
 */
export function createItemDistributionRule(json: any): ItemDistributionRule {
  return ItemDistributionRule.build(json);
}

/**
 * ItemDistributionRuleField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemDistributionRuleField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemDistributionRule> {
  /**
   * Representation of the [[ItemDistributionRule.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemDistributionRule.validFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  validFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ValidFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ItemDistributionRule.validTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  validTo: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ValidTo', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ItemDistributionRule.distributionRule]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule', this, 'Edm.String');
  /**
   * Representation of the [[ItemDistributionRule.distributionRule2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule2', this, 'Edm.String');
  /**
   * Representation of the [[ItemDistributionRule.distributionRule3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule3', this, 'Edm.String');
  /**
   * Representation of the [[ItemDistributionRule.distributionRule4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule4', this, 'Edm.String');
  /**
   * Representation of the [[ItemDistributionRule.distributionRule5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule5', this, 'Edm.String');

  /**
   * Creates an instance of ItemDistributionRuleField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ItemDistributionRule);
  }
}

export namespace ItemDistributionRule {
  /**
   * Metadata information on all properties of the `ItemDistributionRule` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemDistributionRule>[] = [{
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ValidFrom',
    name: 'validFrom',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ValidTo',
    name: 'validTo',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'DistributionRule',
    name: 'distributionRule',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule2',
    name: 'distributionRule2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule3',
    name: 'distributionRule3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule4',
    name: 'distributionRule4',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule5',
    name: 'distributionRule5',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ItemDistributionRule {
    return deserializeComplexTypeV4(json, ItemDistributionRule);
  }
}
