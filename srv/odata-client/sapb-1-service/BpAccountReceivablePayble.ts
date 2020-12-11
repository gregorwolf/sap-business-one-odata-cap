/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoBpAccountTypes } from './BoBpAccountTypes';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BpAccountReceivablePayble
 */
export interface BpAccountReceivablePayble {
  /**
   * Account Type.
   * @nullable
   */
  accountType?: BoBpAccountTypes;
  /**
   * Account Code.
   * @nullable
   */
  accountCode?: string;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BpAccountReceivablePayble.build]] instead.
 */
export function createBpAccountReceivablePayble(json: any): BpAccountReceivablePayble {
  return BpAccountReceivablePayble.build(json);
}

/**
 * BpAccountReceivablePaybleField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpAccountReceivablePaybleField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BpAccountReceivablePayble> {
  /**
   * Representation of the [[BpAccountReceivablePayble.accountType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AccountType', this);
  /**
   * Representation of the [[BpAccountReceivablePayble.accountCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountCode', this, 'Edm.String');
  /**
   * Representation of the [[BpAccountReceivablePayble.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');

  /**
   * Creates an instance of BpAccountReceivablePaybleField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BpAccountReceivablePayble);
  }
}

export namespace BpAccountReceivablePayble {
  /**
   * Metadata information on all properties of the `BpAccountReceivablePayble` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpAccountReceivablePayble>[] = [{
    originalName: 'AccountType',
    name: 'accountType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'AccountCode',
    name: 'accountCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPCode',
    name: 'bpCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BpAccountReceivablePayble {
    return deserializeComplexTypeV4(json, BpAccountReceivablePayble);
  }
}
