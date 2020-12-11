/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TaxCodeDeterminationTcdParams
 */
export interface TaxCodeDeterminationTcdParams {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdParams.build]] instead.
 */
export function createTaxCodeDeterminationTcdParams(json: any): TaxCodeDeterminationTcdParams {
  return TaxCodeDeterminationTcdParams.build(json);
}

/**
 * TaxCodeDeterminationTcdParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxCodeDeterminationTcdParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxCodeDeterminationTcdParams> {
  /**
   * Representation of the [[TaxCodeDeterminationTcdParams.absId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsId', this, 'Edm.Int32');

  /**
   * Creates an instance of TaxCodeDeterminationTcdParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TaxCodeDeterminationTcdParams);
  }
}

export namespace TaxCodeDeterminationTcdParams {
  /**
   * Metadata information on all properties of the `TaxCodeDeterminationTcdParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxCodeDeterminationTcdParams>[] = [{
    originalName: 'AbsId',
    name: 'absId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TaxCodeDeterminationTcdParams {
    return deserializeComplexTypeV4(json, TaxCodeDeterminationTcdParams);
  }
}
