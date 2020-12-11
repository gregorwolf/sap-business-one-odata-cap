/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentMeansTypeEnum } from './PaymentMeansTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Payment Means.
   * @nullable
   */
  paymentMeans?: PaymentMeansTypeEnum;
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
export class CashFlowAssignmentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CashFlowAssignment> {
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
   * Representation of the [[CashFlowAssignment.paymentMeans]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentMeans: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('PaymentMeans', this);
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

  /**
   * Creates an instance of CashFlowAssignmentField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CashFlowAssignment);
  }
}

export namespace CashFlowAssignment {
  /**
   * Metadata information on all properties of the `CashFlowAssignment` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CashFlowAssignment>[] = [{
    originalName: 'CashFlowAssignmentsID',
    name: 'cashFlowAssignmentsId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CashFlowLineItemID',
    name: 'cashFlowLineItemId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Credit',
    name: 'credit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PaymentMeans',
    name: 'paymentMeans',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'CheckNumber',
    name: 'checkNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AmountLC',
    name: 'amountLc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AmountFC',
    name: 'amountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'JDTLineId',
    name: 'jdtLineId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CashFlowAssignment {
    return deserializeComplexTypeV4(json, CashFlowAssignment);
  }
}
