/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DepositParams
 */
export interface DepositParams {
  /**
   * Deposit Number.
   * @nullable
   */
  depositNumber?: number;
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Series.
   * @nullable
   */
  series?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DepositParams.build]] instead.
 */
export function createDepositParams(json: any): DepositParams {
  return DepositParams.build(json);
}

/**
 * DepositParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DepositParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DepositParams.depositNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depositNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DepositNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[DepositParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DepositParams.series]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  series: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Series', this, 'Edm.Int32');
}

export namespace DepositParams {
  export function build(json: { [keys: string]: FieldType }): DepositParams {
    return createComplexType(json, {
      DepositNumber: (depositNumber: number) => ({ depositNumber: edmToTs(depositNumber, 'Edm.Int32') }),
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      Series: (series: number) => ({ series: edmToTs(series, 'Edm.Int32') })
    });
  }
}
