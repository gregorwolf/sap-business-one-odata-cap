/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DeductionTaxGroupParams
 */
export interface DeductionTaxGroupParams {
  /**
   * Group Key.
   * @nullable
   */
  groupKey?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DeductionTaxGroupParams.build]] instead.
 */
export function createDeductionTaxGroupParams(json: any): DeductionTaxGroupParams {
  return DeductionTaxGroupParams.build(json);
}

/**
 * DeductionTaxGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DeductionTaxGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DeductionTaxGroupParams> {
  /**
   * Representation of the [[DeductionTaxGroupParams.groupKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupKey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GroupKey', this, 'Edm.Int32');

  /**
   * Creates an instance of DeductionTaxGroupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DeductionTaxGroupParams);
  }
}

export namespace DeductionTaxGroupParams {
  /**
   * Metadata information on all properties of the `DeductionTaxGroupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DeductionTaxGroupParams>[] = [{
    originalName: 'GroupKey',
    name: 'groupKey',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DeductionTaxGroupParams {
    return deserializeComplexTypeV4(json, DeductionTaxGroupParams);
  }
}
