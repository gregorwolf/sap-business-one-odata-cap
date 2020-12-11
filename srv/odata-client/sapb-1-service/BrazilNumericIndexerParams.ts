/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BrazilNumericIndexerParams
 */
export interface BrazilNumericIndexerParams {
  /**
   * Id.
   * @nullable
   */
  id?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BrazilNumericIndexerParams.build]] instead.
 */
export function createBrazilNumericIndexerParams(json: any): BrazilNumericIndexerParams {
  return BrazilNumericIndexerParams.build(json);
}

/**
 * BrazilNumericIndexerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BrazilNumericIndexerParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BrazilNumericIndexerParams> {
  /**
   * Representation of the [[BrazilNumericIndexerParams.id]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ID', this, 'Edm.Int32');

  /**
   * Creates an instance of BrazilNumericIndexerParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BrazilNumericIndexerParams);
  }
}

export namespace BrazilNumericIndexerParams {
  /**
   * Metadata information on all properties of the `BrazilNumericIndexerParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BrazilNumericIndexerParams>[] = [{
    originalName: 'ID',
    name: 'id',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BrazilNumericIndexerParams {
    return deserializeComplexTypeV4(json, BrazilNumericIndexerParams);
  }
}
