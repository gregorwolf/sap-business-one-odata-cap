/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * JournalEntryParams
 */
export interface JournalEntryParams {
  /**
   * Jdt Num.
   * @nullable
   */
  jdtNum?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[JournalEntryParams.build]] instead.
 */
export function createJournalEntryParams(json: any): JournalEntryParams {
  return JournalEntryParams.build(json);
}

/**
 * JournalEntryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class JournalEntryParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, JournalEntryParams> {
  /**
   * Representation of the [[JournalEntryParams.jdtNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  jdtNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('JdtNum', this, 'Edm.Int32');

  /**
   * Creates an instance of JournalEntryParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, JournalEntryParams);
  }
}

export namespace JournalEntryParams {
  /**
   * Metadata information on all properties of the `JournalEntryParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<JournalEntryParams>[] = [{
    originalName: 'JdtNum',
    name: 'jdtNum',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): JournalEntryParams {
    return deserializeComplexTypeV4(json, JournalEntryParams);
  }
}
