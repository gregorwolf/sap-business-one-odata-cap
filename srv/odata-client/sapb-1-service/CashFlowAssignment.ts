/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * CashFlowAssignment
 */
export interface CashFlowAssignment {
  /**
   * Cash Flow Assignments Id.
   * @nullable
   */
  cashFlowAssignmentsId?: number;
  /**
   * Cash Flow Line Item Id.
   * @nullable
   */
  cashFlowLineItemId?: number;
  /**
   * Credit.
   * @nullable
   */
  credit?: number;
  /**
   * Check Number.
   * @nullable
   */
  checkNumber?: string;
  /**
   * Amount Lc.
   * @nullable
   */
  amountLc?: number;
  /**
   * Amount Fc.
   * @nullable
   */
  amountFc?: number;
  /**
   * Jdt Line Id.
   * @nullable
   */
  jdtLineId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[CashFlowAssignment.build]] instead.
 */
export function createCashFlowAssignment(json: any): CashFlowAssignment {
  return CashFlowAssignment.build(json);
}

/**
 * CashFlowAssignmentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CashFlowAssignmentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CashFlowAssignment.cashFlowAssignmentsId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashFlowAssignmentsId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CashFlowAssignmentsID', this, 'Edm.Int32');
  /**
   * Representation of the [[CashFlowAssignment.cashFlowLineItemId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashFlowLineItemId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CashFlowLineItemID', this, 'Edm.Int32');
  /**
   * Representation of the [[CashFlowAssignment.credit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  credit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Credit', this, 'Edm.Double');
  /**
   * Representation of the [[CashFlowAssignment.checkNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CheckNumber', this, 'Edm.String');
  /**
   * Representation of the [[CashFlowAssignment.amountLc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountLc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AmountLC', this, 'Edm.Double');
  /**
   * Representation of the [[CashFlowAssignment.amountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[CashFlowAssignment.jdtLineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  jdtLineId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('JDTLineId', this, 'Edm.Int32');
}

export namespace CashFlowAssignment {
  export function build(json: { [keys: string]: FieldType }): CashFlowAssignment {
    return createComplexType(json, {
      CashFlowAssignmentsID: (cashFlowAssignmentsId: number) => ({ cashFlowAssignmentsId: edmToTs(cashFlowAssignmentsId, 'Edm.Int32') }),
      CashFlowLineItemID: (cashFlowLineItemId: number) => ({ cashFlowLineItemId: edmToTs(cashFlowLineItemId, 'Edm.Int32') }),
      Credit: (credit: number) => ({ credit: edmToTs(credit, 'Edm.Double') }),
      CheckNumber: (checkNumber: string) => ({ checkNumber: edmToTs(checkNumber, 'Edm.String') }),
      AmountLC: (amountLc: number) => ({ amountLc: edmToTs(amountLc, 'Edm.Double') }),
      AmountFC: (amountFc: number) => ({ amountFc: edmToTs(amountFc, 'Edm.Double') }),
      JDTLineId: (jdtLineId: number) => ({ jdtLineId: edmToTs(jdtLineId, 'Edm.Int32') })
    });
  }
}
