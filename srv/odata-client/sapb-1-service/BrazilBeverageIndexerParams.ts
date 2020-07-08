/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BrazilBeverageIndexerParams
 */
export interface BrazilBeverageIndexerParams {
  /**
   * Beverage Id.
   * @nullable
   */
  beverageId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BrazilBeverageIndexerParams.build]] instead.
 */
export function createBrazilBeverageIndexerParams(json: any): BrazilBeverageIndexerParams {
  return BrazilBeverageIndexerParams.build(json);
}

/**
 * BrazilBeverageIndexerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BrazilBeverageIndexerParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BrazilBeverageIndexerParams.beverageId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  beverageId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BeverageID', this, 'Edm.Int32');
}

export namespace BrazilBeverageIndexerParams {
  export function build(json: { [keys: string]: FieldType }): BrazilBeverageIndexerParams {
    return createComplexType(json, {
      BeverageID: (beverageId: number) => ({ beverageId: edmToTs(beverageId, 'Edm.Int32') })
    });
  }
}
