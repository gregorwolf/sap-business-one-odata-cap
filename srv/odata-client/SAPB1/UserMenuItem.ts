/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserMenuItemTypeEnum } from './UserMenuItemTypeEnum';
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
 * UserMenuItem
 */
export interface UserMenuItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Position.
   * @nullable
   */
  position?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Type.
   * @nullable
   */
  type?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Linked Obj Type.
   * @nullable
   */
  linkedObjType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Linked Obj Key.
   * @nullable
   */
  linkedObjKey?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Linked Form Menu Id.
   * @nullable
   */
  linkedFormMenuId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Linked Form Num.
   * @nullable
   */
  linkedFormNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Report Path.
   * @nullable
   */
  reportPath?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * UserMenuItemField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserMenuItemField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  UserMenuItem,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link UserMenuItem.name} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true);
  /**
   * Representation of the {@link UserMenuItem.position} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  position: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Position', 'Edm.Int32', true);
  /**
   * Representation of the {@link UserMenuItem.type} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: EnumField<EntityT, DeSerializersT, UserMenuItemTypeEnum, true, false> =
    this._fieldBuilder.buildEnumField('Type', UserMenuItemTypeEnum, true);
  /**
   * Representation of the {@link UserMenuItem.linkedObjType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  linkedObjType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LinkedObjType', 'Edm.String', true);
  /**
   * Representation of the {@link UserMenuItem.linkedObjKey} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  linkedObjKey: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LinkedObjKey', 'Edm.String', true);
  /**
   * Representation of the {@link UserMenuItem.linkedFormMenuId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  linkedFormMenuId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'LinkedFormMenuID',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link UserMenuItem.linkedFormNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  linkedFormNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LinkedFormNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link UserMenuItem.reportPath} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportPath: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ReportPath', 'Edm.String', true);

  /**
   * Creates an instance of UserMenuItemField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, UserMenuItem, fieldOptions);
  }
}

export namespace UserMenuItem {
  /**
   * Metadata information on all properties of the `UserMenuItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserMenuItem>[] = [
    {
      originalName: 'Name',
      name: 'name',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Position',
      name: 'position',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Type',
      name: 'type',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'LinkedObjType',
      name: 'linkedObjType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LinkedObjKey',
      name: 'linkedObjKey',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LinkedFormMenuID',
      name: 'linkedFormMenuId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LinkedFormNum',
      name: 'linkedFormNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ReportPath',
      name: 'reportPath',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
