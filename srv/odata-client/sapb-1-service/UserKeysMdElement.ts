/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * UserKeysMdElement
 */
export interface UserKeysMdElement {
  /**
   * Sub Key Index.
   * @nullable
   */
  subKeyIndex?: number;
  /**
   * Column Alias.
   * @nullable
   */
  columnAlias?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[UserKeysMdElement.build]] instead.
 */
export function createUserKeysMdElement(json: any): UserKeysMdElement {
  return UserKeysMdElement.build(json);
}

/**
 * UserKeysMdElementField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserKeysMdElementField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserKeysMdElement> {
  /**
   * Representation of the [[UserKeysMdElement.subKeyIndex]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subKeyIndex: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SubKeyIndex', this, 'Edm.Int32');
  /**
   * Representation of the [[UserKeysMdElement.columnAlias]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  columnAlias: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ColumnAlias', this, 'Edm.String');

  /**
   * Creates an instance of UserKeysMdElementField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UserKeysMdElement);
  }
}

export namespace UserKeysMdElement {
  /**
   * Metadata information on all properties of the `UserKeysMdElement` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserKeysMdElement>[] = [{
    originalName: 'SubKeyIndex',
    name: 'subKeyIndex',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ColumnAlias',
    name: 'columnAlias',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UserKeysMdElement {
    return deserializeComplexTypeV4(json, UserKeysMdElement);
  }
}
