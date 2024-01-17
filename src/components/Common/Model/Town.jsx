




import arena from "../../../assets/Img/Model/Town.glb";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";


export function Town(props) {

    const group = useRef();
    const { nodes, materials, animations } = useGLTF(arena);
    const { actions } = useAnimations(animations, group);










    return (
        <group ref={group} {...props} dispose={null}>
          <group name="Sketchfab_Scene">
            <group
              name="Sketchfab_model"
              rotation={[-Math.PI / 2, 0, 0]}
              userData={{ name: "Sketchfab_model" }}
            >
              <group name="root" userData={{ name: "root" }}>
                <group
                  name="GLTF_SceneRootNode"
                  rotation={[Math.PI / 2, 0, 0]}
                  userData={{ name: "GLTF_SceneRootNode" }}
                >
                  <group
                    name="spw_tree_c_02004_0"
                    position={[0.61, 1.097, 3.54]}
                    rotation={[0, -0.069, 0]}
                    scale={0.731}
                    userData={{ name: "spw_tree_c_02.004_0" }}
                  >
                    <mesh
                      name="Object_4"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_4.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_4" }}
                    />
                  </group>
                  <group
                    name="spw_tree_c_02003_1"
                    position={[-3.706, 1.996, 0.144]}
                    rotation={[0, 0.804, 0]}
                    scale={0.731}
                    userData={{ name: "spw_tree_c_02.003_1" }}
                  >
                    <mesh
                      name="Object_6"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_6.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_6" }}
                    />
                  </group>
                  <group
                    name="spw_tree_c_02002_2"
                    position={[2.704, 3.158, -1.831]}
                    rotation={[0, -1.032, 0]}
                    scale={0.731}
                    userData={{ name: "spw_tree_c_02.002_2" }}
                  >
                    <mesh
                      name="Object_8"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_8.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_8" }}
                    />
                  </group>
                  <group
                    name="spw_tree_c_02001_3"
                    position={[5.936, 3.158, -6.396]}
                    rotation={[0, 0.383, 0]}
                    scale={1.192}
                    userData={{ name: "spw_tree_c_02.001_3" }}
                  >
                    <mesh
                      name="Object_10"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_10" }}
                    />
                  </group>
                  <group
                    name="spw_tree_c_01002_4"
                    position={[-5.187, 1.006, 7.468]}
                    rotation={[0, -0.49, 0]}
                    scale={1.348}
                    userData={{ name: "spw_tree_c_01.002_4" }}
                  >
                    <mesh
                      name="Object_12"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_12.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_12" }}
                    />
                  </group>
                  <group
                    name="spw_tree_c_01001_5"
                    position={[9.444, 1.006, 6.894]}
                    rotation={[0, -0.49, 0]}
                    scale={2.052}
                    userData={{ name: "spw_tree_c_01.001_5" }}
                  >
                    <mesh
                      name="Object_14"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_14.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_14" }}
                    />
                  </group>
                  <group
                    name="spw_tree_a_03004_6"
                    position={[-13.747, -7.824, -27.67]}
                    rotation={[0, 0.383, 0]}
                    scale={1.568}
                    userData={{ name: "spw_tree_a_03.004_6" }}
                  >
                    <mesh
                      name="Object_16"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_16.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_16" }}
                    />
                  </group>
                  <group
                    name="spw_tree_a_03003_7"
                    position={[15.87, -8.711, -23.411]}
                    rotation={[0, 0.383, 0]}
                    scale={1.568}
                    userData={{ name: "spw_tree_a_03.003_7" }}
                  >
                    <mesh
                      name="Object_18"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_18.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_18" }}
                    />
                  </group>
                  <group
                    name="spw_tree_a_03002_8"
                    position={[8.606, 1.209, 0.717]}
                    rotation={[0, 0.383, 0]}
                    scale={1.568}
                    userData={{ name: "spw_tree_a_03.002_8" }}
                  >
                    <mesh
                      name="Object_20"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_20.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_20" }}
                    />
                  </group>
                  <group
                    name="spw_tree_a_03001_9"
                    position={[3.567, 4.27, -10.352]}
                    rotation={[0, 0.383, 0]}
                    scale={1.463}
                    userData={{ name: "spw_tree_a_03.001_9" }}
                  >
                    <mesh
                      name="Object_22"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_22.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_22" }}
                    />
                  </group>
                  <group
                    name="spw_rock_08011_10"
                    position={[1.808, 4.303, -3.896]}
                    rotation={[0, 1.185, 0]}
                    userData={{ name: "spw_rock_08.011_10" }}
                  >
                    <mesh
                      name="Object_24"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_24.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_24" }}
                    />
                  </group>
                  <group
                    name="spw_rock_08010_11"
                    position={[0.985, 4.303, -5.161]}
                    rotation={[0, 0.583, 0]}
                    userData={{ name: "spw_rock_08.010_11" }}
                  >
                    <mesh
                      name="Object_26"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_26.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_26" }}
                    />
                  </group>
                  <group
                    name="spw_rock_08009_12"
                    position={[1.334, 3.203, -1.773]}
                    rotation={[0, 0.82, 0]}
                    userData={{ name: "spw_rock_08.009_12" }}
                  >
                    <mesh
                      name="Object_28"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_28.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_28" }}
                    />
                  </group>
                  <group
                    name="spw_rock_08008_13"
                    position={[-3.268, 2.147, 0.888]}
                    rotation={[0, 1.087, 0]}
                    userData={{ name: "spw_rock_08.008_13" }}
                  >
                    <mesh
                      name="Object_30"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_30.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_30" }}
                    />
                  </group>
                  <group
                    name="spw_rock_08007_14"
                    position={[-1.842, 2.147, 0.187]}
                    rotation={[0, 0.172, 0]}
                    userData={{ name: "spw_rock_08.007_14" }}
                  >
                    <mesh
                      name="Object_32"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_32.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_32" }}
                    />
                  </group>
                  <group
                    name="spw_rock_08006_15"
                    position={[6.344, 1.244, 8.507]}
                    rotation={[0, 1.328, 0]}
                    userData={{ name: "spw_rock_08.006_15" }}
                  >
                    <mesh
                      name="Object_34"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_34.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_34" }}
                    />
                  </group>
                  <group
                    name="spw_rock_08005_16"
                    position={[3.272, 1.244, 8.111]}
                    rotation={[0, 1.533, 0]}
                    userData={{ name: "spw_rock_08.005_16" }}
                  >
                    <mesh
                      name="Object_36"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_36.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_36" }}
                    />
                  </group>
                  <group
                    name="spw_rock_08004_17"
                    position={[0.861, 1.244, 8.543]}
                    userData={{ name: "spw_rock_08.004_17" }}
                  >
                    <mesh
                      name="Object_38"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_38.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_38" }}
                    />
                  </group>
                  <group
                    name="spw_rock_08003_18"
                    position={[-0.458, 1.244, 2.532]}
                    rotation={[0, -0.05, 0]}
                    userData={{ name: "spw_rock_08.003_18" }}
                  >
                    <mesh
                      name="Object_40"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_40.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_40" }}
                    />
                  </group>
                  <group
                    name="spw_rock_08002_19"
                    position={[-1.445, 1.244, 7.229]}
                    rotation={[0, 0.236, 0]}
                    userData={{ name: "spw_rock_08.002_19" }}
                  >
                    <mesh
                      name="Object_42"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_42.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_42" }}
                    />
                  </group>
                  <group
                    name="spw_rock_08001_20"
                    position={[-4.03, 1.244, 8.398]}
                    rotation={[0, -0.486, 0]}
                    userData={{ name: "spw_rock_08.001_20" }}
                  >
                    <mesh
                      name="Object_44"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_44.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_44" }}
                    />
                  </group>
                  <group
                    name="spw_rock_07006_21"
                    position={[4.786, 3.172, -2.693]}
                    rotation={[0, -0.285, 0]}
                    scale={2.248}
                    userData={{ name: "spw_rock_07.006_21" }}
                  >
                    <mesh
                      name="Object_46"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_46.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_46" }}
                    />
                  </group>
                  <group
                    name="spw_rock_07005_22"
                    position={[-3.014, 4.298, -6.777]}
                    rotation={[0, 0.259, 0]}
                    scale={1.657}
                    userData={{ name: "spw_rock_07.005_22" }}
                  >
                    <mesh
                      name="Object_48"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_48.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_48" }}
                    />
                  </group>
                  <group
                    name="spw_rock_07004_23"
                    position={[-1.174, 2.124, -2.324]}
                    rotation={[0, 0.03, 0]}
                    userData={{ name: "spw_rock_07.004_23" }}
                  >
                    <mesh
                      name="Object_50"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_50.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_50" }}
                    />
                  </group>
                  <group
                    name="spw_rock_07003_24"
                    position={[8.368, 1.241, 8.259]}
                    rotation={[0, 0.03, 0]}
                    userData={{ name: "spw_rock_07.003_24" }}
                  >
                    <mesh
                      name="Object_52"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_52.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_52" }}
                    />
                  </group>
                  <group
                    name="spw_rock_07002_25"
                    position={[-7.976, 1.241, 7.849]}
                    rotation={[-Math.PI, 1.442, -Math.PI]}
                    userData={{ name: "spw_rock_07.002_25" }}
                  >
                    <mesh
                      name="Object_54"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_54.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_54" }}
                    />
                  </group>
                  <group
                    name="spw_rock_07001_26"
                    position={[-2.125, 1.241, 2.854]}
                    rotation={[0, 0.772, 0]}
                    userData={{ name: "spw_rock_07.001_26" }}
                  >
                    <mesh
                      name="Object_56"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_56.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_56" }}
                    />
                  </group>
                  <group
                    name="spw_rock_04003_27"
                    position={[4.42, 3.157, -4.463]}
                    rotation={[0, -1.092, 0]}
                    scale={1.287}
                    userData={{ name: "spw_rock_04.003_27" }}
                  >
                    <mesh
                      name="Object_58"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_58.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_58" }}
                    />
                  </group>
                  <group
                    name="spw_rock_04002_28"
                    position={[-4.088, 2.062, -2.665]}
                    rotation={[0, 1.5, 0]}
                    scale={1.287}
                    userData={{ name: "spw_rock_04.002_28" }}
                  >
                    <mesh
                      name="Object_60"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_60.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_60" }}
                    />
                  </group>
                  <group
                    name="spw_rock_04001_29"
                    position={[3.347, 1.299, -0.782]}
                    scale={1.287}
                    userData={{ name: "spw_rock_04.001_29" }}
                  >
                    <mesh
                      name="Object_62"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_62.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_62" }}
                    />
                  </group>
                  <group
                    name="spw_plant_02012_30"
                    position={[-12.037, -8.72, -20.98]}
                    rotation={[0, 0.553, 0]}
                    scale={2.545}
                    userData={{ name: "spw_plant_02.012_30" }}
                  >
                    <mesh
                      name="Object_64"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_64.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_64" }}
                    />
                  </group>
                  <group
                    name="spw_plant_02011_31"
                    position={[-11.069, -7.64, 1.25]}
                    rotation={[0, 0.553, 0]}
                    scale={2.052}
                    userData={{ name: "spw_plant_02.011_31" }}
                  >
                    <mesh
                      name="Object_66"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_66.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_66" }}
                    />
                  </group>
                  <group
                    name="spw_plant_02010_32"
                    position={[-12.371, -7.64, 0.078]}
                    rotation={[0, 0.553, 0]}
                    scale={2.545}
                    userData={{ name: "spw_plant_02.010_32" }}
                  >
                    <mesh
                      name="Object_68"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_68.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_68" }}
                    />
                  </group>
                  <group
                    name="spw_plant_02009_33"
                    position={[1.184, 1.029, 3.609]}
                    rotation={[0, 0.553, 0]}
                    scale={1.173}
                    userData={{ name: "spw_plant_02.009_33" }}
                  >
                    <mesh
                      name="Object_70"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_70.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_70" }}
                    />
                  </group>
                  <group
                    name="spw_plant_02008_34"
                    position={[-5.69, 1.13, 8.236]}
                    rotation={[0, 0.553, 0]}
                    scale={1.226}
                    userData={{ name: "spw_plant_02.008_34" }}
                  >
                    <mesh
                      name="Object_72"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_72.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_72" }}
                    />
                  </group>
                  <group
                    name="spw_plant_02007_35"
                    position={[-6.221, 1.029, 6.938]}
                    rotation={[0, 0.553, 0]}
                    scale={1.876}
                    userData={{ name: "spw_plant_02.007_35" }}
                  >
                    <mesh
                      name="Object_74"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_74.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_74" }}
                    />
                  </group>
                  <group
                    name="spw_plant_02006_36"
                    position={[2.081, 1.029, 5.139]}
                    rotation={[0, 0.553, 0]}
                    scale={1.426}
                    userData={{ name: "spw_plant_02.006_36" }}
                  >
                    <mesh
                      name="Object_76"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_76.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_76" }}
                    />
                  </group>
                  <group
                    name="spw_plant_02005_37"
                    position={[0.559, 2.001, 0.754]}
                    rotation={[0, 0.553, 0]}
                    scale={1.426}
                    userData={{ name: "spw_plant_02.005_37" }}
                  >
                    <mesh
                      name="Object_78"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_78.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_78" }}
                    />
                  </group>
                  <group
                    name="spw_plant_02004_38"
                    position={[-0.475, 2.001, -0.163]}
                    rotation={[0, 0.553, 0]}
                    scale={2.052}
                    userData={{ name: "spw_plant_02.004_38" }}
                  >
                    <mesh
                      name="Object_80"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_80.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_80" }}
                    />
                  </group>
                  <group
                    name="spw_plant_02003_39"
                    position={[-4.029, 4.207, -10.071]}
                    rotation={[0, 0.022, 0]}
                    scale={2.052}
                    userData={{ name: "spw_plant_02.003_39" }}
                  >
                    <mesh
                      name="Object_82"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_82.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_82" }}
                    />
                  </group>
                  <group
                    name="spw_plant_02002_40"
                    position={[3.987, 4.207, -8.094]}
                    rotation={[0, -0.491, 0]}
                    scale={1.545}
                    userData={{ name: "spw_plant_02.002_40" }}
                  >
                    <mesh
                      name="Object_84"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_84.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_84" }}
                    />
                  </group>
                  <group
                    name="spw_plant_02001_41"
                    position={[2.638, 4.207, -8.703]}
                    rotation={[0, -0.491, 0]}
                    scale={2.052}
                    userData={{ name: "spw_plant_02.001_41" }}
                  >
                    <mesh
                      name="Object_86"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_86.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_86" }}
                    />
                  </group>
                  <group
                    name="spw_land_01009_42"
                    position={[-12.118, -9.908, -2.836]}
                    userData={{ name: "spw_land_01.009_42" }}
                  >
                    <mesh
                      name="Object_88"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_88.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_88" }}
                    />
                  </group>
                  <group
                    name="spw_land_01008_43"
                    position={[-13.941, -8.85, 0.577]}
                    userData={{ name: "spw_land_01.008_43" }}
                  >
                    <mesh
                      name="Object_90"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_90.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_90" }}
                    />
                  </group>
                  <group
                    name="spw_land_01007_44"
                    position={[16.038, -9.908, -22.887]}
                    userData={{ name: "spw_land_01.007_44" }}
                  >
                    <mesh
                      name="Object_92"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_92.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_92" }}
                    />
                  </group>
                  <group
                    name="spw_land_01006_45"
                    position={[11.619, -8.85, -24.952]}
                    userData={{ name: "spw_land_01.006_45" }}
                  >
                    <mesh
                      name="Object_94"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_94.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_94" }}
                    />
                  </group>
                  <group
                    name="spw_land_01005_46"
                    position={[-9.654, -9.908, -22.646]}
                    userData={{ name: "spw_land_01.005_46" }}
                  >
                    <mesh
                      name="Object_96"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_96.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_96" }}
                    />
                  </group>
                  <group
                    name="spw_land_01004_47"
                    position={[-11.067, -8.85, -26.515]}
                    userData={{ name: "spw_land_01.004_47" }}
                  >
                    <mesh
                      name="Object_98"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_98.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_98" }}
                    />
                  </group>
                  <group
                    name="spw_land_01003_48"
                    position={[-2.035, 0.91, -2.782]}
                    userData={{ name: "spw_land_01.003_48" }}
                  >
                    <mesh
                      name="Object_100"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_100.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_100" }}
                    />
                  </group>
                  <group
                    name="spw_land_01002_49"
                    position={[2.946, 1.967, -5.401]}
                    userData={{ name: "spw_land_01.002_49" }}
                  >
                    <mesh
                      name="Object_102"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_102.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_102" }}
                    />
                  </group>
                  <group
                    name="spw_land_01001_50"
                    position={[-1.454, 3.067, -7.403]}
                    userData={{ name: "spw_land_01.001_50" }}
                  >
                    <mesh
                      name="Object_104"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_104.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_104" }}
                    />
                  </group>
                  <group
                    name="spw_land_01_51"
                    position={[-1.375, 0, 4.951]}
                    userData={{ name: "spw_land_01_51" }}
                  >
                    <mesh
                      name="Object_106"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_106.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_106" }}
                    />
                  </group>
                  <group
                    name="spw_build_mine_gold_53"
                    position={[6.322, 1.238, 5.45]}
                    rotation={[0, 0.524, 0]}
                    userData={{ name: "spw_build_mine_gold_53" }}
                  >
                    <mesh
                      name="Object_108"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_108.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_108" }}
                    />
                  </group>
                  <group
                    name="spw_build_lumber_house_60"
                    position={[-6.364, 1.238, 3.988]}
                    rotation={[0, -0.677, 0]}
                    userData={{ name: "spw_build_lumber_house_60" }}
                  >
                    <mesh
                      name="Object_110"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_110.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_110" }}
                    />
                    <group name="a_axe_59" userData={{ name: "a_axe_59" }}>
                      <group
                        name="Cube010_54"
                        position={[4.236, 0.299, -1.853]}
                        rotation={[0, Math.PI / 2, 0]}
                        scale={[1, 1, 0.5]}
                        userData={{ name: "Cube.010_54" }}
                      >
                        <mesh
                          name="Object_113"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_113.geometry}
                          material={materials["spw_gradient.002"]}
                          userData={{ name: "Object_113" }}
                        />
                      </group>
                      <group
                        name="Cube011_55"
                        position={[4.481, 0.299, 0.674]}
                        scale={[1, 1, 0.5]}
                        userData={{ name: "Cube.011_55" }}
                      >
                        <mesh
                          name="Object_115"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_115.geometry}
                          material={materials["spw_gradient.002"]}
                          userData={{ name: "Object_115" }}
                        />
                      </group>
                      <group
                        name="Cube017_56"
                        position={[1.773, 3.382, 0]}
                        userData={{ name: "Cube.017_56" }}
                      >
                        <mesh
                          name="Object_117"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_117.geometry}
                          material={materials["spw_gradient.002"]}
                          userData={{ name: "Object_117" }}
                        />
                      </group>
                      <group
                        name="wood001_57"
                        position={[3.537, 0.303, 0.002]}
                        userData={{ name: "wood.001_57" }}
                      >
                        <mesh
                          name="Object_119"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_119.geometry}
                          material={materials["spw_gradient.002"]}
                          userData={{ name: "Object_119" }}
                        />
                      </group>
                      <group
                        name="wood002_58"
                        position={[2.925, 0.303, 0.002]}
                        userData={{ name: "wood.002_58" }}
                      >
                        <mesh
                          name="Object_121"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_121.geometry}
                          material={materials["spw_gradient.002"]}
                          userData={{ name: "Object_121" }}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="spw_build_house_12001_61"
                    position={[-15.166, -7.683, 1.99]}
                    rotation={[0, Math.PI / 2, 0]}
                    userData={{ name: "spw_build_house_12.001_61" }}
                  >
                    <mesh
                      name="Object_123"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_123.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_123" }}
                    />
                  </group>
                  <group
                    name="spw_build_house_12_62"
                    position={[11.111, -7.683, -24.313]}
                    userData={{ name: "spw_build_house_12_62" }}
                  >
                    <mesh
                      name="Object_125"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_125.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_125" }}
                    />
                  </group>
                  <group
                    name="spw_build_house_03001_63"
                    position={[16.535, -10.13, -2.707]}
                    rotation={[0, -Math.PI / 2, 0]}
                    userData={{ name: "spw_build_house_03.001_63" }}
                  >
                    <mesh
                      name="Object_127"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_127.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_127" }}
                    />
                  </group>
                  <group
                    name="spw_build_house_03_64"
                    position={[-11.361, -7.682, -24.321]}
                    userData={{ name: "spw_build_house_03_64" }}
                  >
                    <mesh
                      name="Object_129"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_129.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_129" }}
                    />
                  </group>
                  <group
                    name="spw_build_farmhouse_67"
                    position={[-0.675, 4.306, -7.945]}
                    rotation={[0, 0.614, 0]}
                    userData={{ name: "spw_build_farmhouse_67" }}
                  >
                    <mesh
                      name="Object_131"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_131.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_131" }}
                    />
                    <group
                      name="a_farmhouse_66"
                      userData={{ name: "a_farmhouse_66" }}
                    >
                      <group
                        name="spw_build_brewery_machine002_65"
                        position={[0, 2.451, -1.225]}
                        rotation={[Math.PI / 2, 0, 0]}
                        userData={{ name: "spw_build_brewery_machine.002_65" }}
                      >
                        <mesh
                          name="Object_134"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_134.geometry}
                          material={materials["spw_gradient.004"]}
                          userData={{ name: "Object_134" }}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Cube019_68"
                    position={[-11.85, -13.051, 11.95]}
                    rotation={[-Math.PI, -0.025, -Math.PI]}
                    scale={1.816}
                    userData={{ name: "Cube.019_68" }}
                  >
                    <mesh
                      name="Object_136"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_136.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_136" }}
                    />
                  </group>
                  <group
                    name="Cube015_69"
                    position={[9.258, -13.051, 12.11]}
                    rotation={[0, -1.557, 0]}
                    scale={1.816}
                    userData={{ name: "Cube.015_69" }}
                  >
                    <mesh
                      name="Object_138"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_138.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_138" }}
                    />
                  </group>
                  <group
                    name="Cube012_70"
                    position={[-14.625, -13.051, -30.469]}
                    rotation={[0, 0.014, 0]}
                    scale={1.816}
                    userData={{ name: "Cube.012_70" }}
                  >
                    <mesh
                      name="Object_140"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_140.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_140" }}
                    />
                  </group>
                  <group
                    name="Cube009_71"
                    position={[-14.54, -13.051, -7.92]}
                    rotation={[-Math.PI, 1.557, -Math.PI]}
                    scale={1.816}
                    userData={{ name: "Cube.009_71" }}
                  >
                    <mesh
                      name="Object_142"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_142.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_142" }}
                    />
                  </group>
                  <group
                    name="Cube008_72"
                    position={[25.519, -13.051, -9.274]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={1.816}
                    userData={{ name: "Cube.008_72" }}
                  >
                    <mesh
                      name="Object_144"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_144.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_144" }}
                    />
                  </group>
                  <group
                    name="Cube007_73"
                    position={[28.212, -13.051, -26.943]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={1.816}
                    userData={{ name: "Cube.007_73" }}
                  >
                    <mesh
                      name="Object_146"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_146.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_146" }}
                    />
                  </group>
                  <group
                    name="Cube006_74"
                    position={[8.019, -13.051, -27.173]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={1.816}
                    userData={{ name: "Cube.006_74" }}
                  >
                    <mesh
                      name="Object_148"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_148.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_148" }}
                    />
                  </group>
                  <group
                    name="Cube005_75"
                    position={[2.97, -13.051, -9.503]}
                    scale={1.816}
                    userData={{ name: "Cube.005_75" }}
                  >
                    <mesh
                      name="Object_150"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_150.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_150" }}
                    />
                  </group>
                  <group
                    name="Cube004_76"
                    position={[0.268, 17.859, 32.993]}
                    userData={{ name: "Cube.004_76" }}
                  >
                    <mesh
                      name="Object_152"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_152.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_152" }}
                    />
                  </group>
                  <group
                    name="Cube003_77"
                    position={[-12.206, 19.472, 17.863]}
                    rotation={[0, Math.PI / 2, 0]}
                    userData={{ name: "Cube.003_77" }}
                  >
                    <mesh
                      name="Object_154"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_154.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_154" }}
                    />
                  </group>
                  <group
                    name="Cube002_78"
                    position={[15.023, 17.67, 15.88]}
                    userData={{ name: "Cube.002_78" }}
                  >
                    <mesh
                      name="Object_156"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_156.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_156" }}
                    />
                  </group>
                  <group
                    name="Cube001_79"
                    position={[-11.154, 14.725, -13.015]}
                    rotation={[0, -Math.PI / 2, 0]}
                    userData={{ name: "Cube.001_79" }}
                  >
                    <mesh
                      name="Object_158"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_158.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_158" }}
                    />
                  </group>
                  <group
                    name="Cube_80"
                    position={[11.538, 14.725, -11.664]}
                    userData={{ name: "Cube_80" }}
                  >
                    <mesh
                      name="Object_160"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_160.geometry}
                      material={materials.spw_gradient}
                      userData={{ name: "Object_160" }}
                    />
                  </group>
                  <group
                    name="wood2b002_81"
                    position={[-5.105, 2.258, 2.526]}
                    userData={{ name: "wood2b.002_81" }}
                  >
                    <mesh
                      name="Object_162"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_162.geometry}
                      material={materials["spw_gradient.002"]}
                      userData={{ name: "Object_162" }}
                    />
                  </group>
                  <group
                    name="wood2b001_82"
                    position={[-2.931, 2.258, 4.272]}
                    userData={{ name: "wood2b.001_82" }}
                  >
                    <mesh
                      name="Object_164"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_164.geometry}
                      material={materials["spw_gradient.002"]}
                      userData={{ name: "Object_164" }}
                    />
                  </group>
                  <group
                    name="wood2b_83"
                    position={[-2.558, 2.258, 6.416]}
                    scale={0}
                    userData={{ name: "wood2b_83" }}
                  >
                    <mesh
                      name="Object_166"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_166.geometry}
                      material={materials["spw_gradient.002"]}
                      userData={{ name: "Object_166" }}
                    />
                  </group>
                  <group
                    name="wood2002_84"
                    position={[-4.097, 2.258, 3.507]}
                    userData={{ name: "wood2.002_84" }}
                  >
                    <mesh
                      name="Object_168"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_168.geometry}
                      material={materials["spw_gradient.002"]}
                      userData={{ name: "Object_168" }}
                    />
                  </group>
                  <group
                    name="wood2001_85"
                    position={[-1.741, 2.258, 5.4]}
                    userData={{ name: "wood2.001_85" }}
                  >
                    <mesh
                      name="Object_170"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_170.geometry}
                      material={materials["spw_gradient.002"]}
                      userData={{ name: "Object_170" }}
                    />
                  </group>
                  <group
                    name="wood2_86"
                    position={[-3.176, 2.258, 7.186]}
                    scale={0}
                    userData={{ name: "wood2_86" }}
                  >
                    <mesh
                      name="Object_172"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_172.geometry}
                      material={materials["spw_gradient.002"]}
                      userData={{ name: "Object_172" }}
                    />
                  </group>
                  <group
                    name="wood003_87"
                    position={[-3.85, 2.094, 6.011]}
                    scale={0}
                    userData={{ name: "wood.003_87" }}
                  >
                    <mesh
                      name="Object_174"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_174.geometry}
                      material={materials["spw_gradient.002"]}
                      userData={{ name: "Object_174" }}
                    />
                  </group>
                  <group
                    name="wood_88"
                    position={[-3.85, 2.094, 6.011]}
                    userData={{ name: "wood_88" }}
                  >
                    <mesh
                      name="Object_176"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_176.geometry}
                      material={materials["spw_gradient.002"]}
                      userData={{ name: "Object_176" }}
                    />
                  </group>
                  <group
                    name="Cube013_89"
                    position={[-3.344, 5.946, 6.415]}
                    rotation={[0, 0, -0.309]}
                    userData={{ name: "Cube.013_89" }}
                  >
                    <mesh
                      name="Object_178"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_178.geometry}
                      material={materials["spw_gradient.002"]}
                      userData={{ name: "Object_178" }}
                    />
                  </group>
                  <group
                    name="Cube014_90"
                    position={[-3.799, 4.45, 6.049]}
                    rotation={[0, 0, 1.802]}
                    userData={{ name: "Cube.014_90" }}
                  >
                    <mesh
                      name="Object_180"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_180.geometry}
                      material={materials["spw_gradient.002"]}
                      userData={{ name: "Object_180" }}
                    />
                  </group>
                  <group
                    name="Cube016_91"
                    position={[-4.982, 5.496, 5.098]}
                    rotation={[0, 0, -2.174]}
                    userData={{ name: "Cube.016_91" }}
                  >
                    <mesh
                      name="Object_182"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_182.geometry}
                      material={materials["spw_gradient.002"]}
                      userData={{ name: "Object_182" }}
                    />
                  </group>
                  <group
                    name="spw_build_mine_coal004_92"
                    position={[6.312, 4.876, 5.432]}
                    userData={{ name: "spw_build_mine_coal.004_92" }}
                  >
                    <mesh
                      name="Object_184"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_184.geometry}
                      material={materials["spw_gradient.003"]}
                      userData={{ name: "Object_184" }}
                    />
                  </group>
                  <group
                    name="spw_build_mine_coal003_93"
                    position={[8.098, 6.172, 4.4]}
                    userData={{ name: "spw_build_mine_coal.003_93" }}
                  >
                    <mesh
                      name="Object_186"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_186.geometry}
                      material={materials["spw_gradient.003"]}
                      userData={{ name: "Object_186" }}
                    />
                  </group>
                  <group
                    name="spw_build_mine_coal002_94"
                    position={[8.098, 4.155, 4.4]}
                    userData={{ name: "spw_build_mine_coal.002_94" }}
                  >
                    <mesh
                      name="Object_188"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_188.geometry}
                      material={materials["spw_gradient.003"]}
                      userData={{ name: "Object_188" }}
                    />
                  </group>
                  <group
                    name="spw_build_mine_coal001_95"
                    position={[6.312, 6.172, 5.432]}
                    userData={{ name: "spw_build_mine_coal.001_95" }}
                  >
                    <mesh
                      name="Object_190"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_190.geometry}
                      material={materials["spw_gradient.003"]}
                      userData={{ name: "Object_190" }}
                    />
                  </group>
                  <group
                    name="Cylinder024_96"
                    position={[0.77, 9.814, -5.894]}
                    userData={{ name: "Cylinder.024_96" }}
                  >
                    <mesh
                      name="Object_192"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_192.geometry}
                      material={materials["spw_gradient.004"]}
                      userData={{ name: "Object_192" }}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      );
    }
    

    useGLTF.preload(arena);
