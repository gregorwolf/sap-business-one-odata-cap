/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * CashFlowLineItemParams
 */
export interface CashFlowLineItemParams {
  /**
   * Line Item Id.
   * @nullable
   */
  lineItemId?: number;
  /**
   * Line Item Name.
   * @nullable
   */
  lineItemName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[CashFlowLineItemParams.build]] instead.
 */
export function createCashFlowLineItemParams(json: any): CashFlowLineItemParams {
  return CashFlowLineItemParams.build(json);
}

/**
 * CashFlowLineItemParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CashFlowLineItemParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CashFlowLineItemParams.lineItemId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineItemId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineItemID', this, 'Edm.Int32');
  /**
   * Representation of the [[CashFlowLineItemParams.lineItemName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineItemName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LineItemName', this, 'Edm.String');
}

export namespace CashFlowLineItemParams {
  export function build(json: { [keys: string]: FieldType }): CashFlowLineItemParams {
    return createComplexType(json, {
      LineItemID: (lineItemId: number) => ({ lineItemId: edmToTs(lineItemId, 'Edm.Int32') }),
      LineItemName: (lineItemName: string) => ({ lineItemName: edmToTs(lineItemName, 'Edm.String') })
    });
  }
}
