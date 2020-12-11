/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * CreditLineParams
 */
export interface CreditLineParams {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[CreditLineParams.build]] instead.
 */
export function createCreditLineParams(json: any): CreditLineParams {
  return CreditLineParams.build(json);
}

/**
 * CreditLineParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CreditLineParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CreditLineParams> {
  /**
   * Representation of the [[CreditLineParams.absId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsId', this, 'Edm.Int32');

  /**
   * Creates an instance of CreditLineParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CreditLineParams);
  }
}

export namespace CreditLineParams {
  /**
   * Metadata information on all properties of the `CreditLineParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CreditLineParams>[] = [{
    originalName: 'AbsId',
    name: 'absId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CreditLineParams {
    return deserializeComplexTypeV4(json, CreditLineParams);
  }
}
