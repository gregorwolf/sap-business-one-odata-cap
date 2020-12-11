/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class AlternateCatNumParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AlternateCatNumParams> {
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

  /**
   * Creates an instance of AlternateCatNumParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, AlternateCatNumParams);
  }
}

export namespace AlternateCatNumParams {
  /**
   * Metadata information on all properties of the `AlternateCatNumParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AlternateCatNumParams>[] = [{
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CardCode',
    name: 'cardCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Substitute',
    name: 'substitute',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): AlternateCatNumParams {
    return deserializeComplexTypeV4(json, AlternateCatNumParams);
  }
}
