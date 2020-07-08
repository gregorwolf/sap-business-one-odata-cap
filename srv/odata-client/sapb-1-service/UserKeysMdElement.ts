/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class UserKeysMdElementField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace UserKeysMdElement {
  export function build(json: { [keys: string]: FieldType }): UserKeysMdElement {
    return createComplexType(json, {
      SubKeyIndex: (subKeyIndex: number) => ({ subKeyIndex: edmToTs(subKeyIndex, 'Edm.Int32') }),
      ColumnAlias: (columnAlias: string) => ({ columnAlias: edmToTs(columnAlias, 'Edm.String') })
    });
  }
}
