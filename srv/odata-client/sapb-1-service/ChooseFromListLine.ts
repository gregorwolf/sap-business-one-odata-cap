/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ChooseFromListLine
 */
export interface ChooseFromListLine {
  /**
   * Field No.
   * @nullable
   */
  fieldNo?: string;
  /**
   * Displayed Name.
   * @nullable
   */
  displayedName?: string;
  /**
   * Visual Index.
   * @nullable
   */
  visualIndex?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ChooseFromListLine.build]] instead.
 */
export function createChooseFromListLine(json: any): ChooseFromListLine {
  return ChooseFromListLine.build(json);
}

/**
 * ChooseFromListLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ChooseFromListLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ChooseFromListLine.fieldNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FieldNo', this, 'Edm.String');
  /**
   * Representation of the [[ChooseFromListLine.displayedName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayedName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DisplayedName', this, 'Edm.String');
  /**
   * Representation of the [[ChooseFromListLine.visualIndex]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visualIndex: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VisualIndex', this, 'Edm.Int32');
}

export namespace ChooseFromListLine {
  export function build(json: { [keys: string]: FieldType }): ChooseFromListLine {
    return createComplexType(json, {
      FieldNo: (fieldNo: string) => ({ fieldNo: edmToTs(fieldNo, 'Edm.String') }),
      DisplayedName: (displayedName: string) => ({ displayedName: edmToTs(displayedName, 'Edm.String') }),
      VisualIndex: (visualIndex: number) => ({ visualIndex: edmToTs(visualIndex, 'Edm.Int32') })
    });
  }
}
