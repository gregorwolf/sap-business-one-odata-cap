/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BpBranchAssignmentItem
 */
export interface BpBranchAssignmentItem {
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: number;
  /**
   * Disabled For Bp.
   * @nullable
   */
  disabledForBp?: BoYesNoEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[BpBranchAssignmentItem.build]] instead.
 */
export function createBpBranchAssignmentItem(json: any): BpBranchAssignmentItem {
  return BpBranchAssignmentItem.build(json);
}

/**
 * BpBranchAssignmentItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpBranchAssignmentItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BpBranchAssignmentItem> {
  /**
   * Representation of the [[BpBranchAssignmentItem.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
  /**
   * Representation of the [[BpBranchAssignmentItem.bplid]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplid: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BPLID', this, 'Edm.Int32');
  /**
   * Representation of the [[BpBranchAssignmentItem.disabledForBp]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  disabledForBp: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DisabledForBP', this);

  /**
   * Creates an instance of BpBranchAssignmentItemField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BpBranchAssignmentItem);
  }
}

export namespace BpBranchAssignmentItem {
  /**
   * Metadata information on all properties of the `BpBranchAssignmentItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpBranchAssignmentItem>[] = [{
    originalName: 'BPCode',
    name: 'bpCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPLID',
    name: 'bplid',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DisabledForBP',
    name: 'disabledForBp',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BpBranchAssignmentItem {
    return deserializeComplexTypeV4(json, BpBranchAssignmentItem);
  }
}
