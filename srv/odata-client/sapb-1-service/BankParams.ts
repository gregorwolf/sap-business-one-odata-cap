/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BankParams
 */
export interface BankParams {
  /**
   * Absolute Entry.
   * @nullable
   */
  absoluteEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BankParams.build]] instead.
 */
export function createBankParams(json: any): BankParams {
  return BankParams.build(json);
}

/**
 * BankParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BankParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BankParams> {
  /**
   * Representation of the [[BankParams.absoluteEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsoluteEntry', this, 'Edm.Int32');

  /**
   * Creates an instance of BankParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BankParams);
  }
}

export namespace BankParams {
  /**
   * Metadata information on all properties of the `BankParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BankParams>[] = [{
    originalName: 'AbsoluteEntry',
    name: 'absoluteEntry',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BankParams {
    return deserializeComplexTypeV4(json, BankParams);
  }
}
