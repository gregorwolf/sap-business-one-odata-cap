/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * EmployeeTransferParams
 */
export interface EmployeeTransferParams {
  /**
   * Transfer Id.
   * @nullable
   */
  transferId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[EmployeeTransferParams.build]] instead.
 */
export function createEmployeeTransferParams(json: any): EmployeeTransferParams {
  return EmployeeTransferParams.build(json);
}

/**
 * EmployeeTransferParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeTransferParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeeTransferParams> {
  /**
   * Representation of the [[EmployeeTransferParams.transferId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transferId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TransferID', this, 'Edm.Int32');

  /**
   * Creates an instance of EmployeeTransferParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, EmployeeTransferParams);
  }
}

export namespace EmployeeTransferParams {
  /**
   * Metadata information on all properties of the `EmployeeTransferParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeeTransferParams>[] = [{
    originalName: 'TransferID',
    name: 'transferId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): EmployeeTransferParams {
    return deserializeComplexTypeV4(json, EmployeeTransferParams);
  }
}
