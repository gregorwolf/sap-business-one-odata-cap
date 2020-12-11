/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ContactParams
 */
export interface ContactParams {
  /**
   * Contact Code.
   * @nullable
   */
  contactCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ContactParams.build]] instead.
 */
export function createContactParams(json: any): ContactParams {
  return ContactParams.build(json);
}

/**
 * ContactParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ContactParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ContactParams> {
  /**
   * Representation of the [[ContactParams.contactCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ContactCode', this, 'Edm.Int32');

  /**
   * Creates an instance of ContactParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ContactParams);
  }
}

export namespace ContactParams {
  /**
   * Metadata information on all properties of the `ContactParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ContactParams>[] = [{
    originalName: 'ContactCode',
    name: 'contactCode',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ContactParams {
    return deserializeComplexTypeV4(json, ContactParams);
  }
}
