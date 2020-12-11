/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DepreciationCalculationBaseEnum } from './DepreciationCalculationBaseEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DepreciationLevel
 */
export interface DepreciationLevel {
  /**
   * Level.
   * @nullable
   */
  level?: number;
  /**
   * Depreciation Calculation Base.
   * @nullable
   */
  depreciationCalculationBase?: DepreciationCalculationBaseEnum;
  /**
   * Number Of Years.
   * @nullable
   */
  numberOfYears?: number;
  /**
   * Percentage.
   * @nullable
   */
  percentage?: number;
  /**
   * Amount.
   * @nullable
   */
  amount?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DepreciationLevel.build]] instead.
 */
export function createDepreciationLevel(json: any): DepreciationLevel {
  return DepreciationLevel.build(json);
}

/**
 * DepreciationLevelField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DepreciationLevelField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DepreciationLevel> {
  /**
   * Representation of the [[DepreciationLevel.level]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  level: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Level', this, 'Edm.Int32');
  /**
   * Representation of the [[DepreciationLevel.depreciationCalculationBase]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationCalculationBase: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DepreciationCalculationBase', this);
  /**
   * Representation of the [[DepreciationLevel.numberOfYears]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numberOfYears: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NumberOfYears', this, 'Edm.Int32');
  /**
   * Representation of the [[DepreciationLevel.percentage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  percentage: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Percentage', this, 'Edm.Double');
  /**
   * Representation of the [[DepreciationLevel.amount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Amount', this, 'Edm.Double');

  /**
   * Creates an instance of DepreciationLevelField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DepreciationLevel);
  }
}

export namespace DepreciationLevel {
  /**
   * Metadata information on all properties of the `DepreciationLevel` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DepreciationLevel>[] = [{
    originalName: 'Level',
    name: 'level',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DepreciationCalculationBase',
    name: 'depreciationCalculationBase',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'NumberOfYears',
    name: 'numberOfYears',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Percentage',
    name: 'percentage',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Amount',
    name: 'amount',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DepreciationLevel {
    return deserializeComplexTypeV4(json, DepreciationLevel);
  }
}
