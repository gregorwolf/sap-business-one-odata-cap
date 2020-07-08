/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * AlternateCatNumParams
 */
export interface AlternateCatNumParams {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: string;
  /**
   * Substitute.
   * @nullable
   */
  substitute?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[AlternateCatNumParams.build]] instead.
 */
export function createAlternateCatNumParams(json: any): AlternateCatNumParams {
  return AlternateCatNumParams.build(json);
}

/**
 * AlternateCatNumParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AlternateCatNumParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[AlternateCatNumParams.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[AlternateCatNumParams.cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CardCode', this, 'Edm.String');
  /**
   * Representation of the [[AlternateCatNumParams.substitute]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  substitute: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Substitute', this, 'Edm.String');
}

export namespace AlternateCatNumParams {
  export function build(json: { [keys: string]: FieldType }): AlternateCatNumParams {
    return createComplexType(json, {
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      CardCode: (cardCode: string) => ({ cardCode: edmToTs(cardCode, 'Edm.String') }),
      Substitute: (substitute: string) => ({ substitute: edmToTs(substitute, 'Edm.String') })
    });
  }
}
