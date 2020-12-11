/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * AlternativeItem
 */
export interface AlternativeItem {
  /**
   * Alternative Item Code.
   * @nullable
   */
  alternativeItemCode?: string;
  /**
   * Match Factor.
   * @nullable
   */
  matchFactor?: number;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[AlternativeItem.build]] instead.
 */
export function createAlternativeItem(json: any): AlternativeItem {
  return AlternativeItem.build(json);
}

/**
 * AlternativeItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AlternativeItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AlternativeItem> {
  /**
   * Representation of the [[AlternativeItem.alternativeItemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alternativeItemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AlternativeItemCode', this, 'Edm.String');
  /**
   * Representation of the [[AlternativeItem.matchFactor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  matchFactor: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MatchFactor', this, 'Edm.Double');
  /**
   * Representation of the [[AlternativeItem.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');

  /**
   * Creates an instance of AlternativeItemField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, AlternativeItem);
  }
}

export namespace AlternativeItem {
  /**
   * Metadata information on all properties of the `AlternativeItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AlternativeItem>[] = [{
    originalName: 'AlternativeItemCode',
    name: 'alternativeItemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'MatchFactor',
    name: 'matchFactor',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Remarks',
    name: 'remarks',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): AlternativeItem {
    return deserializeComplexTypeV4(json, AlternativeItem);
  }
}
