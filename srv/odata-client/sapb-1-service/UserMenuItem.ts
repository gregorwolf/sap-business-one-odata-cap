/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class UserMenuItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace UserMenuItem {
  export function build(json: { [keys: string]: FieldType }): UserMenuItem {
    return createComplexType(json, {
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      Position: (position: number) => ({ position: edmToTs(position, 'Edm.Int32') }),
      LinkedObjType: (linkedObjType: string) => ({ linkedObjType: edmToTs(linkedObjType, 'Edm.String') }),
      LinkedObjKey: (linkedObjKey: string) => ({ linkedObjKey: edmToTs(linkedObjKey, 'Edm.String') }),
      LinkedFormMenuID: (linkedFormMenuId: number) => ({ linkedFormMenuId: edmToTs(linkedFormMenuId, 'Edm.Int32') }),
      LinkedFormNum: (linkedFormNum: number) => ({ linkedFormNum: edmToTs(linkedFormNum, 'Edm.Int32') }),
      ReportPath: (reportPath: string) => ({ reportPath: edmToTs(reportPath, 'Edm.String') })
    });
  }
}
