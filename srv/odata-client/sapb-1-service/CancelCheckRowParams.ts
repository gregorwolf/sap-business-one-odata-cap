/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class CancelCheckRowParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace CancelCheckRowParams {
  export function build(json: { [keys: string]: FieldType }): CancelCheckRowParams {
    return createComplexType(json, {
      DepositID: (depositId: number) => ({ depositId: edmToTs(depositId, 'Edm.Int32') }),
      CheckID: (checkId: number) => ({ checkId: edmToTs(checkId, 'Edm.Int32') })
    });
  }
}
