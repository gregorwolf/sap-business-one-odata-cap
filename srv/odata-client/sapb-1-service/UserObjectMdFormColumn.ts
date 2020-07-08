/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * UserObjectMdFormColumn
 */
export interface UserObjectMdFormColumn {
  /**
   * Form Column Alias.
   * @nullable
   */
  formColumnAlias?: string;
  /**
   * Form Column Description.
   * @nullable
   */
  formColumnDescription?: string;
  /**
   * Form Column Number.
   * @nullable
   */
  formColumnNumber?: number;
  /**
   * Son Number.
   * @nullable
   */
  sonNumber?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[UserObjectMdFormColumn.build]] instead.
 */
export function createUserObjectMdFormColumn(json: any): UserObjectMdFormColumn {
  return UserObjectMdFormColumn.build(json);
}

/**
 * UserObjectMdFormColumnField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserObjectMdFormColumnField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[UserObjectMdFormColumn.formColumnAlias]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formColumnAlias: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FormColumnAlias', this, 'Edm.String');
  /**
   * Representation of the [[UserObjectMdFormColumn.formColumnDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formColumnDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FormColumnDescription', this, 'Edm.String');
  /**
   * Representation of the [[UserObjectMdFormColumn.formColumnNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formColumnNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FormColumnNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[UserObjectMdFormColumn.sonNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sonNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SonNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[UserObjectMdFormColumn.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
}

export namespace UserObjectMdFormColumn {
  export function build(json: { [keys: string]: FieldType }): UserObjectMdFormColumn {
    return createComplexType(json, {
      FormColumnAlias: (formColumnAlias: string) => ({ formColumnAlias: edmToTs(formColumnAlias, 'Edm.String') }),
      FormColumnDescription: (formColumnDescription: string) => ({ formColumnDescription: edmToTs(formColumnDescription, 'Edm.String') }),
      FormColumnNumber: (formColumnNumber: number) => ({ formColumnNumber: edmToTs(formColumnNumber, 'Edm.Int32') }),
      SonNumber: (sonNumber: number) => ({ sonNumber: edmToTs(sonNumber, 'Edm.Int32') }),
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') })
    });
  }
}
