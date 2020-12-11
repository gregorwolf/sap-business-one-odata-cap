/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class CashFlowLineItemParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CashFlowLineItemParams> {
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

  /**
   * Creates an instance of CashFlowLineItemParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CashFlowLineItemParams);
  }
}

export namespace CashFlowLineItemParams {
  /**
   * Metadata information on all properties of the `CashFlowLineItemParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CashFlowLineItemParams>[] = [{
    originalName: 'LineItemID',
    name: 'lineItemId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineItemName',
    name: 'lineItemName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CashFlowLineItemParams {
    return deserializeComplexTypeV4(json, CashFlowLineItemParams);
  }
}
