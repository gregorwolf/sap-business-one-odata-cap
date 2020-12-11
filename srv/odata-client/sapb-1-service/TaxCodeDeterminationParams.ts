/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TaxCodeDeterminationParams
 */
export interface TaxCodeDeterminationParams {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationParams.build]] instead.
 */
export function createTaxCodeDeterminationParams(json: any): TaxCodeDeterminationParams {
  return TaxCodeDeterminationParams.build(json);
}

/**
 * TaxCodeDeterminationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxCodeDeterminationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxCodeDeterminationParams> {
  /**
   * Representation of the [[TaxCodeDeterminationParams.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');

  /**
   * Creates an instance of TaxCodeDeterminationParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TaxCodeDeterminationParams);
  }
}

export namespace TaxCodeDeterminationParams {
  /**
   * Metadata information on all properties of the `TaxCodeDeterminationParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxCodeDeterminationParams>[] = [{
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TaxCodeDeterminationParams {
    return deserializeComplexTypeV4(json, TaxCodeDeterminationParams);
  }
}
