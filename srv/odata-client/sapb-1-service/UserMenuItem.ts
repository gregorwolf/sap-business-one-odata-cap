/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserMenuItemTypeEnum } from './UserMenuItemTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * UserMenuItem
 */
export interface UserMenuItem {
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Position.
   * @nullable
   */
  position?: number;
  /**
   * Type.
   * @nullable
   */
  type?: UserMenuItemTypeEnum;
  /**
   * Linked Obj Type.
   * @nullable
   */
  linkedObjType?: string;
  /**
   * Linked Obj Key.
   * @nullable
   */
  linkedObjKey?: string;
  /**
   * Linked Form Menu Id.
   * @nullable
   */
  linkedFormMenuId?: number;
  /**
   * Linked Form Num.
   * @nullable
   */
  linkedFormNum?: number;
  /**
   * Report Path.
   * @nullable
   */
  reportPath?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[UserMenuItem.build]] instead.
 */
export function createUserMenuItem(json: any): UserMenuItem {
  return UserMenuItem.build(json);
}

/**
 * UserMenuItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserMenuItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserMenuItem> {
  /**
   * Representation of the [[UserMenuItem.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[UserMenuItem.position]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  position: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Position', this, 'Edm.Int32');
  /**
   * Representation of the [[UserMenuItem.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Type', this);
  /**
   * Representation of the [[UserMenuItem.linkedObjType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  linkedObjType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LinkedObjType', this, 'Edm.String');
  /**
   * Representation of the [[UserMenuItem.linkedObjKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  linkedObjKey: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LinkedObjKey', this, 'Edm.String');
  /**
   * Representation of the [[UserMenuItem.linkedFormMenuId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  linkedFormMenuId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LinkedFormMenuID', this, 'Edm.Int32');
  /**
   * Representation of the [[UserMenuItem.linkedFormNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  linkedFormNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LinkedFormNum', this, 'Edm.Int32');
  /**
   * Representation of the [[UserMenuItem.reportPath]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportPath: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ReportPath', this, 'Edm.String');

  /**
   * Creates an instance of UserMenuItemField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UserMenuItem);
  }
}

export namespace UserMenuItem {
  /**
   * Metadata information on all properties of the `UserMenuItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserMenuItem>[] = [{
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Position',
    name: 'position',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Type',
    name: 'type',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'LinkedObjType',
    name: 'linkedObjType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LinkedObjKey',
    name: 'linkedObjKey',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LinkedFormMenuID',
    name: 'linkedFormMenuId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LinkedFormNum',
    name: 'linkedFormNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ReportPath',
    name: 'reportPath',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UserMenuItem {
    return deserializeComplexTypeV4(json, UserMenuItem);
  }
}
