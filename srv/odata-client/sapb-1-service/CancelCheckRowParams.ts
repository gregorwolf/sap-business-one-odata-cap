/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * CancelCheckRowParams
 */
export interface CancelCheckRowParams {
  /**
   * Deposit Id.
   * @nullable
   */
  depositId?: number;
  /**
   * Check Id.
   * @nullable
   */
  checkId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[CancelCheckRowParams.build]] instead.
 */
export function createCancelCheckRowParams(json: any): CancelCheckRowParams {
  return CancelCheckRowParams.build(json);
}

/**
 * CancelCheckRowParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CancelCheckRowParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CancelCheckRowParams> {
  /**
   * Representation of the [[CancelCheckRowParams.depositId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depositId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DepositID', this, 'Edm.Int32');
  /**
   * Representation of the [[CancelCheckRowParams.checkId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CheckID', this, 'Edm.Int32');

  /**
   * Creates an instance of CancelCheckRowParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CancelCheckRowParams);
  }
}

export namespace CancelCheckRowParams {
  /**
   * Metadata information on all properties of the `CancelCheckRowParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CancelCheckRowParams>[] = [{
    originalName: 'DepositID',
    name: 'depositId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CheckID',
    name: 'checkId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CancelCheckRowParams {
    return deserializeComplexTypeV4(json, CancelCheckRowParams);
  }
}
