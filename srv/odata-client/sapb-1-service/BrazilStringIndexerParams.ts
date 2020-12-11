/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BrazilStringIndexerParams
 */
export interface BrazilStringIndexerParams {
  /**
   * Id.
   * @nullable
   */
  id?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BrazilStringIndexerParams.build]] instead.
 */
export function createBrazilStringIndexerParams(json: any): BrazilStringIndexerParams {
  return BrazilStringIndexerParams.build(json);
}

/**
 * BrazilStringIndexerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BrazilStringIndexerParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BrazilStringIndexerParams> {
  /**
   * Representation of the [[BrazilStringIndexerParams.id]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ID', this, 'Edm.Int32');

  /**
   * Creates an instance of BrazilStringIndexerParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BrazilStringIndexerParams);
  }
}

export namespace BrazilStringIndexerParams {
  /**
   * Metadata information on all properties of the `BrazilStringIndexerParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BrazilStringIndexerParams>[] = [{
    originalName: 'ID',
    name: 'id',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BrazilStringIndexerParams {
    return deserializeComplexTypeV4(json, BrazilStringIndexerParams);
  }
}
