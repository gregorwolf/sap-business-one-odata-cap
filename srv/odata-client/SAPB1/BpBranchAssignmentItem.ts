/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * BpBranchAssignmentItem
 */
export interface BpBranchAssignmentItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Disabled For Bp.
   * @nullable
   */
  disabledForBp?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * BpBranchAssignmentItemField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpBranchAssignmentItemField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BpBranchAssignmentItem,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BpBranchAssignmentItem.bpCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPCode', 'Edm.String', true);
  /**
   * Representation of the {@link BpBranchAssignmentItem.bplid} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplid: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPLID', 'Edm.Int32', true);
  /**
   * Representation of the {@link BpBranchAssignmentItem.disabledForBp} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  disabledForBp: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('DisabledForBP', BoYesNoEnum, true);

  /**
   * Creates an instance of BpBranchAssignmentItemField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      BpBranchAssignmentItem,
      fieldOptions
    );
  }
}

export namespace BpBranchAssignmentItem {
  /**
   * Metadata information on all properties of the `BpBranchAssignmentItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpBranchAssignmentItem>[] = [
    {
      originalName: 'BPCode',
      name: 'bpCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BPLID',
      name: 'bplid',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DisabledForBP',
      name: 'disabledForBp',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
