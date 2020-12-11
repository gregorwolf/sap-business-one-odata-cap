/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * InternalReconciliationParams
 */
export interface InternalReconciliationParams {
  /**
   * Recon Num.
   * @nullable
   */
  reconNum?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationParams.build]] instead.
 */
export function createInternalReconciliationParams(json: any): InternalReconciliationParams {
  return InternalReconciliationParams.build(json);
}

/**
 * InternalReconciliationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InternalReconciliationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InternalReconciliationParams> {
  /**
   * Representation of the [[InternalReconciliationParams.reconNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ReconNum', this, 'Edm.Int32');

  /**
   * Creates an instance of InternalReconciliationParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, InternalReconciliationParams);
  }
}

export namespace InternalReconciliationParams {
  /**
   * Metadata information on all properties of the `InternalReconciliationParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InternalReconciliationParams>[] = [{
    originalName: 'ReconNum',
    name: 'reconNum',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): InternalReconciliationParams {
    return deserializeComplexTypeV4(json, InternalReconciliationParams);
  }
}
